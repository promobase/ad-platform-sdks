import { ConsoleLogger, Message, NotImplementedError, convertEmojiPlaceholders } from "chat";
import type {
  Adapter,
  AdapterPostableMessage,
  ChatInstance,
  EmojiValue,
  FetchOptions,
  FetchResult,
  FormattedContent,
  Logger,
  RawMessage,
  ThreadInfo,
  WebhookOptions,
} from "chat";

import { MarkdownFormatConverter } from "./format.ts";
import type { CommentThreadContext, CommentVerb } from "./thread-id.ts";

/**
 * Canonical comment event after platform normalization. Platform adapters map
 * their `changes` webhook values into this shape; the base dispatches it.
 */
export interface CommentEvent {
  commentId: string;
  /** Parent comment id when this is a reply. */
  parentId?: string;
  /** Post id (facebook) or media id (instagram). */
  postId?: string;
  mediaId?: string;
  text: string | null;
  verb: CommentVerb;
  fromId?: string;
  fromName?: string;
  createdAt?: Date;
}

/**
 * Platform-neutral Chat SDK adapter runtime for comment threads (one thread
 * per comment tree, rooted at the top-level comment id).
 *
 * Subclasses supply: webhook verification/parsing, thread identity, self
 * detection, and outbound comment effects. Comment adapters never reuse the
 * DM adapter runtime — comments are their own surface with their own thread
 * model, verbs (add/edit/remove/hide), and send semantics.
 */
export abstract class CommentAdapterBase<
  TThreadId extends { parentCommentId: string },
> implements Adapter<TThreadId, CommentEvent> {
  abstract readonly name: string;
  userName: string;
  botUserId: string | undefined;

  readonly lockScope = "thread" as const;
  readonly persistThreadHistory = true;

  protected chat: ChatInstance | null = null;
  protected logger: Logger;
  protected readonly converter = new MarkdownFormatConverter();

  /** Post/media context observed on events, for thread metadata. */
  protected readonly threadContext = new Map<string, CommentThreadContext>();

  constructor(options: {
    adapterName: string;
    userName?: string;
    logger?: Logger;
    emojiFormat?: Parameters<typeof convertEmojiPlaceholders>[1];
  }) {
    this.adapterName = options.adapterName;
    this.userName = options.userName ?? options.adapterName;
    this.logger = options.logger ?? new ConsoleLogger();
    this.emojiFormat = options.emojiFormat ?? "messenger";
  }

  protected readonly adapterName: string;
  protected readonly emojiFormat: Parameters<typeof convertEmojiPlaceholders>[1];

  async initialize(chat: ChatInstance): Promise<void> {
    this.chat = chat;
    this.logger = chat.getLogger(this.name);
  }

  // ── Thread identity ───────────────────────────────────────────────────

  abstract encodeThreadId(data: TThreadId): string;
  abstract decodeThreadId(threadId: string): TThreadId;

  /** Comment thread id for an event (roots at the top-level comment). */
  protected abstract threadIdForEvent(event: CommentEvent): string;

  /** True when the event was authored by the business account itself. */
  protected abstract isSelfFrom(event: CommentEvent): boolean;

  channelIdFromThreadId(threadId: string): string {
    return threadId;
  }

  // ── Webhook ingress ───────────────────────────────────────────────────

  protected abstract verifyInbound(request: Request, body: string): Promise<Response | null>;

  /** Decode a verified webhook body into normalized comment events. */
  protected abstract parseWebhook(body: string): Promise<CommentEvent[]>;

  async handleWebhook(request: Request, options?: WebhookOptions): Promise<Response> {
    if (request.method !== "GET" && request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const body = await request.text();
    const rejection = await this.verifyInbound(request, body);
    if (rejection) return rejection;

    if (request.method === "GET") {
      return new Response("Not found", { status: 404 });
    }

    let events: CommentEvent[];
    try {
      events = await this.parseWebhook(body);
    } catch (error) {
      return new Response(error instanceof Error ? error.message : "Invalid payload", {
        status: 400,
      });
    }

    const chat = this.chat;
    if (!chat) {
      this.logger.warn("Chat instance not initialized, ignoring webhook");
      return new Response("EVENT_RECEIVED", { status: 200 });
    }

    for (const event of events) {
      await this.dispatchEvent(event, options);
    }

    return new Response("EVENT_RECEIVED", { status: 200 });
  }

  private async dispatchEvent(event: CommentEvent, options?: WebhookOptions): Promise<void> {
    const chat = this.chat;
    if (!chat) return;

    const threadId = this.threadIdForEvent(event);
    this.recordThreadContext(threadId, event);

    if (event.verb === "remove" || event.verb === "delete" || event.verb === "hide") {
      chat.processMessageDeleted(
        {
          adapter: this,
          platform: this.name,
          channelId: threadId,
          threadId,
          messageId: event.commentId,
          raw: event,
        },
        options,
      );
      return;
    }

    if (event.verb === "edit") {
      await chat.processMessageUpdated(
        {
          adapter: this,
          threadId,
          message: async () => this.parseMessage(event) as unknown as Message,
        },
        options,
      );
      return;
    }

    const parsed = this.parseMessage(event);
    if (parsed.author.isMe) {
      // Business-authored comments are cached for history, not dispatched.
      this.logger.debug("Caching self-authored comment", { commentId: event.commentId });
      return;
    }
    await chat.processMessage(this, threadId, async () => parsed as Message, options);
  }

  private recordThreadContext(threadId: string, event: CommentEvent): void {
    const existing = this.threadContext.get(threadId) ?? {};
    const next: CommentThreadContext = { ...existing };
    if (event.postId) next.postId = event.postId;
    if (event.mediaId) next.mediaId = event.mediaId;
    this.threadContext.set(threadId, next);
  }

  // ── Message parsing ───────────────────────────────────────────────────

  parseMessage(raw: CommentEvent): Message<CommentEvent> {
    const threadId = this.threadIdForEvent(raw);
    const isMe = this.isSelfFrom(raw);
    const text = raw.text ?? "";
    const message = new Message<CommentEvent>({
      id: raw.commentId,
      threadId,
      text,
      formatted: this.converter.toAst(text),
      raw,
      author: {
        userId: raw.fromId ?? raw.commentId,
        userName: raw.fromName ?? raw.fromId ?? raw.commentId,
        fullName: raw.fromName ?? raw.fromId ?? raw.commentId,
        isBot: isMe,
        isMe,
      },
      metadata: {
        dateSent: raw.createdAt ?? new Date(),
        edited: raw.verb === "edit",
      },
      attachments: [],
    });
    this.cacheMessage(message);
    return message;
  }

  // ── Outbound ──────────────────────────────────────────────────────────

  protected abstract replyToComment(
    commentId: string,
    text: string,
  ): Promise<{ messageId: string }>;

  protected async deleteComment(_commentId: string): Promise<void> {
    throw new NotImplementedError("Platform does not support comment deletion", "deleteMessage");
  }

  protected async setCommentHidden(_commentId: string, _hidden: boolean): Promise<void> {
    throw new NotImplementedError("Platform does not support hiding comments", "hideComment");
  }

  /** Build the self-authored event used to cache a sent reply. */
  protected abstract buildSelfCommentEvent(
    threadId: string,
    commentId: string,
    text: string | null,
  ): CommentEvent;

  async postMessage(
    threadId: string,
    message: AdapterPostableMessage,
  ): Promise<RawMessage<CommentEvent>> {
    const text = convertEmojiPlaceholders(this.converter.renderPostable(message), this.emojiFormat);
    if (!text.trim()) {
      throw new Error("Comment text cannot be empty");
    }
    const { parentCommentId } = this.decodeThreadId(threadId);
    const result = await this.replyToComment(parentCommentId, text);
    this.cacheMessage(
      this.parseMessage(this.buildSelfCommentEvent(threadId, result.messageId, text)),
    );
    return { id: result.messageId, raw: {} as CommentEvent, threadId };
  }

  async reply(
    threadId: string,
    messageId: string,
    message: AdapterPostableMessage,
  ): Promise<RawMessage<CommentEvent>> {
    const text = convertEmojiPlaceholders(this.converter.renderPostable(message), this.emojiFormat);
    const result = await this.replyToComment(messageId, text);
    this.cacheMessage(
      this.parseMessage(this.buildSelfCommentEvent(threadId, result.messageId, text)),
    );
    return { id: result.messageId, raw: {} as CommentEvent, threadId };
  }

  async deleteMessage(_threadId: string, messageId: string): Promise<void> {
    await this.deleteComment(messageId);
  }

  /** Hide (moderate) or unhide a comment. */
  async hideComment(commentId: string, hidden = true): Promise<void> {
    await this.setCommentHidden(commentId, hidden);
  }

  async startTyping(): Promise<void> {
    throw new NotImplementedError(
      "Comment threads do not support typing indicators",
      "startTyping",
    );
  }

  async markAsRead(): Promise<void> {
    throw new NotImplementedError("Comment threads do not support read receipts", "markAsRead");
  }

  async editMessage(): Promise<RawMessage<CommentEvent>> {
    throw new NotImplementedError("Platform does not support editing comments", "editMessage");
  }

  async addReaction(
    _threadId: string,
    _messageId: string,
    _emoji: EmojiValue | string,
  ): Promise<void> {
    throw new NotImplementedError(
      "Comments do not support reactions via this adapter",
      "addReaction",
    );
  }

  async removeReaction(
    _threadId: string,
    _messageId: string,
    _emoji: EmojiValue | string,
  ): Promise<void> {
    throw new NotImplementedError(
      "Comments do not support reactions via this adapter",
      "removeReaction",
    );
  }

  // ── History ───────────────────────────────────────────────────────────

  async fetchMessages(
    _threadId: string,
    _options?: FetchOptions,
  ): Promise<FetchResult<CommentEvent>> {
    return { messages: [], nextCursor: undefined };
  }

  async fetchThread(threadId: string): Promise<ThreadInfo> {
    return {
      id: threadId,
      channelId: this.channelIdFromThreadId(threadId),
      isDM: false,
      metadata: { ...this.threadContext.get(threadId) },
    };
  }

  renderFormatted(content: FormattedContent): string {
    return this.converter.fromAst(content);
  }

  // ── Cache helpers ─────────────────────────────────────────────────────

  protected cacheMessage(message: Message<CommentEvent>): void {
    const existing = this.messageCache.get(message.threadId) ?? [];
    const index = existing.findIndex((item) => item.id === message.id);
    if (index >= 0) {
      existing[index] = message;
    } else {
      existing.push(message);
    }
    this.messageCache.set(message.threadId, existing);
  }

  private readonly messageCache = new Map<string, Message<CommentEvent>[]>();
}
