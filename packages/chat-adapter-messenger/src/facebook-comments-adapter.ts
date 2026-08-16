import {
  CommentAdapterBase,
  commentThreadId,
  verifyHubInbound,
  type CommentEvent,
} from "@openpromo/chat-adapter-core";
import { Facebook, fbWebhookPayloadSchema } from "@openpromo/meta";
import type { Logger } from "chat";

/**
 * Facebook Page post comments adapter. One thread per comment tree, rooted
 * at the top-level comment id (`facebook:{pageId}:comment:{parentCommentId}`).
 * Delivered through the page webhook's `changes` field (`item: "comment"`).
 *
 * This is a separate Chat SDK adapter from the Messenger DM adapter: it has
 * its own webhook surface, thread model, and send semantics (reply / hide /
 * delete on comments), and shares only the page client and credentials.
 */
export class FacebookCommentsAdapter extends CommentAdapterBase<CommentThreadId> {
  readonly name = "facebook_comments";

  private readonly appSecret: string;
  private readonly verifyToken: string;
  private readonly pageId: string;
  private readonly pageClient: ReturnType<typeof Facebook.createClient>;

  constructor(options: {
    appSecret: string;
    verifyToken: string;
    accessToken: string;
    pageId: string;
    apiVersion?: string;
    userName?: string;
    logger?: Logger;
    fetch?: typeof fetch;
    signal?: AbortSignal;
  }) {
    super({
      adapterName: "facebook_comments",
      userName: options.userName,
      logger: options.logger,
      emojiFormat: "messenger",
    });
    this.appSecret = options.appSecret;
    this.verifyToken = options.verifyToken;
    this.pageId = options.pageId;
    this.botUserId = options.pageId;
    this.pageClient = Facebook.createClient({
      pageId: options.pageId,
      accessToken: options.accessToken,
      apiVersion: options.apiVersion,
      fetch: options.fetch,
      signal: options.signal,
    });
  }

  encodeThreadId(data: CommentThreadId): string {
    return commentThreadId({
      platform: "facebook",
      accountId: this.pageId,
      parentCommentId: data.parentCommentId,
    });
  }

  decodeThreadId(threadId: string): CommentThreadId {
    const prefix = `facebook:${this.pageId}:comment:`;
    if (!threadId.startsWith(prefix)) {
      throw new Error(`Invalid facebook comment thread id: ${threadId}`);
    }
    const parentCommentId = threadId.slice(prefix.length);
    if (!parentCommentId) {
      throw new Error(`Invalid facebook comment thread id: ${threadId}`);
    }
    return { parentCommentId };
  }

  protected threadIdForEvent(event: CommentEvent): string {
    // Top-level comments report parent_id === post_id (or omit it); replies
    // report the parent comment id.
    const isTopLevel = !event.parentId || event.parentId === event.postId;
    const parentCommentId = isTopLevel ? event.commentId : (event.parentId ?? event.commentId);
    return this.encodeThreadId({ parentCommentId });
  }

  protected isSelfFrom(event: CommentEvent): boolean {
    return Boolean(event.fromId && event.fromId === this.pageId);
  }

  protected async verifyInbound(request: Request, body: string): Promise<Response | null> {
    return verifyHubInbound(request, body, {
      appSecret: this.appSecret,
      verifyToken: this.verifyToken,
    });
  }

  protected async parseWebhook(body: string): Promise<CommentEvent[]> {
    const parsed = fbWebhookPayloadSchema.safeParse(JSON.parse(body));
    if (!parsed.success) {
      const detail =
        parsed.error instanceof Error ? parsed.error.message : "Invalid webhook payload";
      throw new Error(detail);
    }
    const events: CommentEvent[] = [];
    for (const entry of parsed.data.entry) {
      for (const change of entry.changes ?? []) {
        if (change.field !== "feed" || change.value.item !== "comment") continue;
        const value = change.value;
        if (!value.comment_id) continue;
        events.push({
          commentId: value.comment_id,
          parentId: value.parent_id,
          postId: value.post_id,
          text: value.message ?? null,
          verb: mapVerb(value.verb),
          fromId: value.from?.id,
          fromName: value.from?.name,
          createdAt: value.created_time ? new Date(value.created_time * 1000) : undefined,
        });
      }
    }
    return events;
  }

  protected async replyToComment(commentId: string, text: string): Promise<{ messageId: string }> {
    const result = await this.pageClient.comments.reply(commentId, text);
    return { messageId: result.id };
  }

  protected override async deleteComment(commentId: string): Promise<void> {
    await this.pageClient.comments.delete(commentId);
  }

  protected override async setCommentHidden(commentId: string, hidden: boolean): Promise<void> {
    await this.pageClient.comments.hide(commentId, hidden);
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
      fromId: this.pageId,
      fromName: this.pageId,
    };
  }
}

export interface CommentThreadId {
  /** Top-level comment id the thread is rooted at. */
  parentCommentId: string;
}

function mapVerb(verb: string | undefined): CommentEvent["verb"] {
  switch (verb) {
    case "add":
      return "add";
    case "edited":
      return "edit";
    case "remove":
      return "remove";
    case "hide":
      return "hide";
    default:
      return "unknown";
  }
}
