import {
  CommentAdapterBase,
  commentThreadId,
  verifyHubInbound,
  type CommentEvent,
} from "@openpromo/chat-adapter-core";
import { createGraphClient, Instagram, igWebhookPayloadSchema } from "@openpromo/meta";
import type { InstagramCommentChange } from "@openpromo/meta/webhooks";
import type { Logger } from "chat";

export interface CommentThreadId {
  /** Top-level comment id the thread is rooted at. */
  parentCommentId: string;
}

/**
 * Instagram post comments adapter. One thread per comment tree, rooted at
 * the top-level comment id (`instagram:{accountId}:comment:{parentCommentId}`).
 * Delivered through the IG webhook's `changes` field (`field: "comments"`).
 *
 * This is a separate Chat SDK adapter from the Instagram DM adapter: its own
 * webhook surface, thread model, and send semantics (reply / hide / delete
 * on comments); it shares only the graph client and credentials.
 */
export class InstagramCommentsAdapter extends CommentAdapterBase<CommentThreadId> {
  readonly name = "instagram_comments";

  private readonly appSecret: string;
  private readonly verifyToken: string;
  private readonly accountId: string;
  private readonly igClient: ReturnType<typeof Instagram.createClient>;

  constructor(options: {
    appSecret: string;
    verifyToken: string;
    accessToken: string;
    accountId: string;
    apiVersion?: string;
    userName?: string;
    logger?: Logger;
    fetch?: typeof fetch;
    signal?: AbortSignal;
  }) {
    super({
      adapterName: "instagram_comments",
      userName: options.userName,
      logger: options.logger,
      emojiFormat: "messenger",
    });
    this.appSecret = options.appSecret;
    this.verifyToken = options.verifyToken;
    this.accountId = options.accountId;
    this.botUserId = options.accountId;
    const api = createGraphClient({
      accessToken: options.accessToken,
      apiVersion: options.apiVersion,
      fetch: options.fetch,
      signal: options.signal,
    });
    this.igClient = Instagram.createClient({
      api,
      igAccountId: options.accountId,
      accessToken: options.accessToken,
      fetch: options.fetch,
      signal: options.signal,
    });
  }

  encodeThreadId(data: CommentThreadId): string {
    return commentThreadId({
      platform: "instagram",
      accountId: this.accountId,
      parentCommentId: data.parentCommentId,
    });
  }

  decodeThreadId(threadId: string): CommentThreadId {
    const prefix = `instagram:${this.accountId}:comment:`;
    if (!threadId.startsWith(prefix)) {
      throw new Error(`Invalid instagram comment thread id: ${threadId}`);
    }
    const parentCommentId = threadId.slice(prefix.length);
    if (!parentCommentId) {
      throw new Error(`Invalid instagram comment thread id: ${threadId}`);
    }
    return { parentCommentId };
  }

  protected threadIdForEvent(event: CommentEvent): string {
    const parentCommentId = event.parentId ?? event.commentId;
    return this.encodeThreadId({ parentCommentId });
  }

  protected isSelfFrom(event: CommentEvent): boolean {
    return Boolean(event.fromId && event.fromId === this.accountId);
  }

  protected async verifyInbound(request: Request, body: string): Promise<Response | null> {
    return verifyHubInbound(request, body, {
      appSecret: this.appSecret,
      verifyToken: this.verifyToken,
    });
  }

  protected async parseWebhook(body: string): Promise<CommentEvent[]> {
    const parsed = igWebhookPayloadSchema.safeParse(JSON.parse(body));
    if (!parsed.success) {
      const detail =
        parsed.error instanceof Error ? parsed.error.message : "Invalid webhook payload";
      throw new Error(detail);
    }
    const events: CommentEvent[] = [];
    for (const entry of parsed.data.entry) {
      for (const change of entry.changes ?? []) {
        if (change.field !== "comments") continue;
        // Narrow the tolerant change union to the comments member.
        const value = (change as InstagramCommentChange).value;
        const commentId = value.comment_id ?? value.id;
        if (!commentId) continue;
        events.push({
          commentId,
          parentId: value.parent_id,
          mediaId: value.media?.id,
          text: value.text ?? null,
          verb: mapVerb(value.verb),
          fromId: value.from?.id,
          fromName: value.from?.username,
          createdAt: value.created_time ? new Date(value.created_time * 1000) : undefined,
        });
      }
    }
    return events;
  }

  protected async replyToComment(commentId: string, text: string): Promise<{ messageId: string }> {
    const result = await this.igClient.comments.reply(commentId, text);
    return { messageId: result.id };
  }

  protected override async deleteComment(commentId: string): Promise<void> {
    await this.igClient.comments.delete(commentId);
  }

  protected override async setCommentHidden(commentId: string, hidden: boolean): Promise<void> {
    await this.igClient.comments.hide(commentId, hidden);
  }

  protected buildSelfCommentEvent(
    threadId: string,
    commentId: string,
    text: string | null,
  ): CommentEvent {
    const { parentCommentId } = this.decodeThreadId(threadId);
    return {
      commentId,
      parentId: parentCommentId,
      text,
      verb: "add",
      fromId: this.accountId,
    };
  }
}

function mapVerb(verb: string | undefined): CommentEvent["verb"] {
  switch (verb) {
    case "add":
      return "add";
    case "edited":
      return "edit";
    case "remove":
    case "removed":
    case "deleted":
      return "remove";
    case "hide":
      return "hide";
    default:
      return "unknown";
  }
}
