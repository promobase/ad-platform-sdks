import {
  CommentAdapterBase,
  commentThreadId,
  type CommentEvent,
} from "@openpromo/chat-adapter-core";
import { TikTok, commentWebhookEventSchema } from "@openpromo/tiktok";
import type { CommentWebhookEvent } from "@openpromo/tiktok";
import type { Logger } from "chat";
import { safeParse } from "valibot";

import { verifyTikTokInbound } from "./verify-inbound.ts";
import { collectTikTokWebhookEvents } from "./webhook-events.ts";

export interface CommentThreadId {
  /** Top-level comment id the thread is rooted at. */
  parentCommentId: string;
}

export interface TikTokCommentsAdapterOptions {
  /** TikTok Business app secret, used to verify the TikTok-Signature header. */
  appSecret: string;
  /** TikTok Business API access token. */
  accessToken: string;
  /** TikTok Business id. */
  businessId: string;
  /** Maximum acceptable webhook signature age in seconds (default 300). */
  maxSignatureAgeSeconds?: number;
  /** Unique runtime name when multiple TikTok accounts share one Chat instance. */
  adapterName?: string;
  /** Disable Chat SDK history persistence when the caller owns durable history. */
  persistThreadHistory?: boolean;
  userName?: string;
  logger?: Logger;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/**
 * TikTok Business post comments adapter. One thread per comment tree, rooted
 * at the top-level comment id (`tiktok:{businessId}:comment:{parentCommentId}`).
 * Delivered through the `comment.update` webhook event.
 *
 * Unlike the Meta comment adapters, TikTok webhook content carries text but
 * not the commenter's identity or ownership flag, so `insert` events fetch
 * the comment detail once (owner, display name) before dispatch. Delete
 * events tombstone from the payload without a fetch.
 */
export class TikTokCommentsAdapter extends CommentAdapterBase<CommentThreadId> {
  private readonly appSecret: string;
  private readonly businessId: string;
  private readonly maxSignatureAgeSeconds: number;
  private readonly client: ReturnType<typeof TikTok.createClient>;
  /** commentId -> videoId, learned from webhook content and detail fetches. */
  private readonly commentVideoIds = new Map<string, string>();

  constructor(options: TikTokCommentsAdapterOptions) {
    super({
      adapterName: options.adapterName ?? "tiktok_comments",
      userName: options.userName,
      logger: options.logger,
      emojiFormat: "messenger",
      persistThreadHistory: options.persistThreadHistory,
    });
    this.appSecret = options.appSecret;
    this.businessId = options.businessId;
    this.maxSignatureAgeSeconds = options.maxSignatureAgeSeconds ?? 300;
    this.botUserId = options.businessId;
    this.client = TikTok.createClient({
      accessToken: options.accessToken,
      businessId: options.businessId,
      fetch: options.fetch,
      signal: options.signal,
    });
  }

  encodeThreadId(data: CommentThreadId): string {
    return commentThreadId({
      platform: "tiktok",
      accountId: this.businessId,
      parentCommentId: data.parentCommentId,
    });
  }

  decodeThreadId(threadId: string): CommentThreadId {
    const prefix = `tiktok:${this.businessId}:comment:`;
    if (!threadId.startsWith(prefix)) {
      throw new Error(`Invalid tiktok comment thread id: ${threadId}`);
    }
    const parentCommentId = threadId.slice(prefix.length);
    if (!parentCommentId) {
      throw new Error(`Invalid tiktok comment thread id: ${threadId}`);
    }
    return { parentCommentId };
  }

  protected threadIdForEvent(event: CommentEvent): string {
    const parentCommentId = event.parentId ?? event.commentId;
    return this.encodeThreadId({ parentCommentId });
  }

  protected isSelfFrom(event: CommentEvent): boolean {
    return Boolean(event.fromId && event.fromId === this.businessId);
  }

  protected async verifyInbound(request: Request, body: string): Promise<Response | null> {
    return verifyTikTokInbound(request, body, {
      appSecret: this.appSecret,
      maxSignatureAgeSeconds: this.maxSignatureAgeSeconds,
    });
  }

  protected async parseWebhook(body: string): Promise<CommentEvent[]> {
    const payload = JSON.parse(body) as unknown;

    const result: CommentEvent[] = [];
    for (const event of collectTikTokWebhookEvents(payload)) {
      if (event.event !== "comment.update") continue;
      // Narrow the tolerant event union to the comment member.
      result.push(await this.commentEventFromUpdate(event as CommentWebhookEvent));
    }
    return result;
  }

  private async commentEventFromUpdate(event: CommentWebhookEvent): Promise<CommentEvent> {
    const content = event.content;
    const commentId = String(content.comment_id);
    const videoId = String(content.video_id);
    this.commentVideoIds.set(commentId, videoId);

    const action = content.comment_action;
    if (action === "delete") {
      return {
        commentId,
        videoId,
        parentId:
          content.parent_comment_id !== undefined ? String(content.parent_comment_id) : undefined,
        text: null,
        verb: "remove",
        createdAt: new Date(content.timestamp * 1000),
      };
    }
    if (action === "set_to_hidden") {
      return {
        commentId,
        videoId,
        parentId:
          content.parent_comment_id !== undefined ? String(content.parent_comment_id) : undefined,
        text: content.text,
        verb: "hide",
        createdAt: new Date(content.timestamp * 1000),
      };
    }

    // insert (and visibility changes): enrich with owner + display name.
    const details = await this.fetchCommentDetails(videoId, commentId);
    const parentId =
      details?.parent_comment_id ??
      (content.parent_comment_id !== undefined ? String(content.parent_comment_id) : undefined);
    const isOwner = details?.owner ?? false;
    return {
      commentId,
      videoId,
      parentId,
      text: details?.text ?? content.text,
      verb: action === "set_to_friends_only" || action === "set_to_public" ? "unknown" : "add",
      // The webhook payload has no owner flag; the business id is the sentinel
      // for the account's own comments so self-comments are cached, not dispatched.
      fromId: isOwner ? this.businessId : (details?.unique_identifier ?? content.unique_identifier),
      fromName: details?.display_name ?? details?.username ?? content.unique_identifier,
      createdAt: new Date(content.timestamp * 1000),
    };
  }

  private async fetchCommentDetails(
    videoId: string,
    commentId: string,
  ): Promise<import("@openpromo/tiktok").CommentItem | undefined> {
    try {
      const { comments } = await this.client.comments.list({
        videoId,
        commentIds: [commentId],
      });
      const found = comments.find((comment) => comment.comment_id === commentId);
      if (found?.parent_comment_id) {
        this.commentVideoIds.set(found.parent_comment_id, videoId);
      }
      return found;
    } catch (error) {
      this.logger.warn("Failed to fetch TikTok comment details", {
        commentId,
        error: String(error),
      });
      return undefined;
    }
  }

  protected async replyToComment(commentId: string, text: string): Promise<{ messageId: string }> {
    const videoId = this.commentVideoIds.get(commentId);
    if (!videoId) {
      throw new Error(`Unknown TikTok video for comment ${commentId}`);
    }
    const item = await this.client.comments.reply({ videoId, commentId, text });
    return { messageId: item.comment_id };
  }

  protected override async deleteComment(commentId: string): Promise<void> {
    await this.client.comments.delete(commentId);
  }

  protected override async setCommentHidden(commentId: string, hidden: boolean): Promise<void> {
    const videoId = this.commentVideoIds.get(commentId);
    if (!videoId) {
      throw new Error(`Unknown TikTok video for comment ${commentId}`);
    }
    await this.client.comments.hide({
      videoId,
      commentId,
      action: hidden ? "HIDE" : "UNHIDE",
    });
  }

  protected buildSelfCommentEvent(
    threadId: string,
    commentId: string,
    text: string | null,
  ): CommentEvent {
    const { parentCommentId } = this.decodeThreadId(threadId);
    return {
      commentId,
      videoId: this.commentVideoIds.get(parentCommentId),
      parentId: parentCommentId,
      text,
      verb: "add",
      fromId: this.businessId,
    };
  }
}
