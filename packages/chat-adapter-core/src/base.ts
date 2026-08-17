import { extractCard } from "@chat-adapter/shared";
import {
  ConsoleLogger,
  NotImplementedError,
  convertEmojiPlaceholders,
  defaultEmojiResolver,
} from "chat";
import type {
  ActionEvent,
  Adapter,
  AdapterPostableMessage,
  CardElement,
  ChannelInfo,
  ChatInstance,
  EmojiValue,
  FetchOptions,
  FetchResult,
  FormattedContent,
  Logger,
  Message,
  RawMessage,
  ReactionEvent,
  StreamChunk,
  StreamOptions,
  ThreadInfo,
  WebhookOptions,
} from "chat";

import { MarkdownFormatConverter } from "./format.ts";
import {
  isMessagingEventWithMessage,
  normalizeMessagingEvent,
  type MessagingEventLike,
} from "./normalize.ts";
import type {
  AdapterWebhookEvent,
  AdapterWebhookParseResult,
  AdapterWebhookSource,
} from "./webhook-events.ts";

const MESSAGE_SEQUENCE_PATTERN = /:(\d+)$/;

type VerifiedWebhookEvents<T> =
  | { kind: "response"; response: Response }
  | { kind: "events"; events: T[][] };

/**
 * Platform-neutral Chat SDK adapter runtime for DM messaging platforms.
 *
 * Subclasses supply the provider-specific seams:
 * - `verifyInbound` — reject unauthenticated webhooks (challenge + signature)
 * - `parseWebhook` — decode the verified body into messaging events
 * - thread identity (`encodeThreadId`, `decodeThreadId`, `threadIdForEvent`,
 *   `threadIdForUser`)
 * - `sendText` / `sendSenderAction` — outbound provider effects
 * - `renderCard` / `sendTemplate` / `buildEchoEvent` / `decodeActionPayload`
 *   — cards, actions, and sent-message history
 *
 * Everything else — webhook dispatch (messages, echoes, postbacks, quick
 * replies, reactions, read/delivery), normalization, buffered streaming,
 * in-memory message history with cursor pagination, formatting, and capability
 * defaults — is shared. Platform = the basic unit: one adapter class per
 * platform package, never a provider-company grouping.
 */
export abstract class ChatMessagingAdapterBase<TThreadId, TRawEvent extends MessagingEventLike>
  implements Adapter<TThreadId, TRawEvent>, AdapterWebhookSource<TRawEvent>
{
  readonly name: string;
  userName: string;
  botUserId: string | undefined;

  readonly lockScope = "thread" as const;
  readonly persistThreadHistory: boolean;

  protected chat: ChatInstance | null = null;
  protected logger: Logger;
  protected readonly converter = new MarkdownFormatConverter();

  private readonly messageCache = new Map<string, Message<TRawEvent>[]>();

  constructor(options: {
    adapterName: string;
    userName?: string;
    logger?: Logger;
    emojiFormat?: Parameters<typeof convertEmojiPlaceholders>[1];
    persistThreadHistory?: boolean;
  }) {
    this.adapterName = options.adapterName;
    this.name = options.adapterName;
    this.userName = options.userName ?? options.adapterName;
    this.logger = options.logger ?? new ConsoleLogger();
    this.emojiFormat = options.emojiFormat ?? "messenger";
    this.persistThreadHistory = options.persistThreadHistory ?? true;
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

  /** Thread id for a raw messaging event (contact keyed, echo-aware). */
  protected abstract threadIdForEvent(event: TRawEvent): string;

  /**
   * Thread id for an edit event. Defaults to the sender-based id; platforms
   * whose edit payloads lack the original recipient should resolve the
   * cached message's thread instead.
   */
  protected threadIdForEditedEvent(event: TRawEvent): string {
    return this.threadIdForEvent(event);
  }

  /** Thread data for a 1:1 conversation with a user. */
  protected abstract threadIdForUser(userId: string): TThreadId;

  channelIdFromThreadId(threadId: string): string {
    return threadId;
  }

  async openDM(userId: string): Promise<string> {
    return this.encodeThreadId(this.threadIdForUser(userId));
  }

  isDM(_threadId: string): boolean {
    return true;
  }

  // ── Webhook ingress ───────────────────────────────────────────────────

  /**
   * Validate an inbound request (GET challenge or POST signature). Return
   * `null` to accept, or a `Response` to reject.
   */
  protected abstract verifyInbound(request: Request, body: string): Promise<Response | null>;

  /** Decode a verified webhook body into rows of messaging events. Throws on parse failure. */
  protected abstract parseWebhook(body: string): Promise<TRawEvent[][]>;

  /**
   * Verify and normalize webhook events without requiring a Chat runtime.
   * Transport-owned callers can durably enqueue these events, then map them
   * into their own domain model before invoking `handleWebhook`-style effects.
   */
  async parseWebhookEvents(request: Request): Promise<AdapterWebhookParseResult<TRawEvent>> {
    const result = await this.parseVerifiedWebhook(request);
    if (result.kind === "response") return result;
    return {
      kind: "events",
      events: result.events.flatMap((events) =>
        events.flatMap((event) => this.normalizeWebhookEvent(event)),
      ),
    };
  }

  private async parseVerifiedWebhook(request: Request): Promise<VerifiedWebhookEvents<TRawEvent>> {
    if (request.method !== "GET" && request.method !== "POST") {
      return { kind: "response", response: new Response("Method not allowed", { status: 405 }) };
    }
    const body = await request.text();
    const rejection = await this.verifyInbound(request, body);
    if (rejection) return { kind: "response", response: rejection };
    if (request.method === "GET") {
      return { kind: "response", response: new Response("Not found", { status: 404 }) };
    }

    try {
      return { kind: "events", events: await this.parseWebhook(body) };
    } catch (error) {
      return {
        kind: "response",
        response: new Response(error instanceof Error ? error.message : "Invalid payload", {
          status: 400,
        }),
      };
    }
  }

  protected normalizeWebhookEvent(event: TRawEvent): AdapterWebhookEvent<TRawEvent>[] {
    if (event.message_edit) {
      const message = this.parseMessage(event, this.threadIdForEditedEvent(event));
      return [
        {
          kind: "message_updated",
          threadId: message.threadId,
          eventId: message.id,
          message,
          raw: event,
          isSelf: message.author.isMe,
        },
      ];
    }
    if (event.message?.quick_reply?.payload) {
      const { actionId, value } = this.decodeActionPayload(event.message.quick_reply.payload);
      return [
        {
          kind: "action",
          threadId: this.threadIdForEvent(event),
          eventId: event.message.mid,
          messageId: event.message.mid,
          action: { id: actionId, ...(value === undefined ? {} : { value }) },
          raw: event,
        },
      ];
    }
    if (event.postback) {
      const { actionId, value } = this.decodeActionPayload(event.postback.payload);
      return [
        {
          kind: "action",
          threadId: this.threadIdForEvent(event),
          ...(event.postback.mid ? { eventId: event.postback.mid } : {}),
          messageId: event.postback.mid,
          action: { id: actionId, ...(value === undefined ? {} : { value }) },
          raw: event,
        },
      ];
    }
    if (event.reaction) {
      return [
        {
          kind: "reaction",
          threadId: this.threadIdForEvent(event),
          messageId: event.reaction.mid,
          reaction: {
            added: event.reaction.action === "react",
            rawEmoji: event.reaction.emoji ?? event.reaction.reaction ?? "",
          },
          raw: event,
        },
      ];
    }
    if (event.read) {
      return [{ kind: "read", threadId: this.threadIdForEvent(event), raw: event }];
    }
    if (event.delivery) {
      return [{ kind: "delivery", threadId: this.threadIdForEvent(event), raw: event }];
    }
    if (!isMessagingEventWithMessage(event)) return [];
    const message = this.parseMessage(event);
    return [
      {
        kind: "message",
        threadId: message.threadId,
        eventId: message.id,
        message,
        raw: event,
        isSelf: message.author.isMe,
      },
    ];
  }

  /** Decode a button/quick-reply payload into an action. Passthrough by default. */
  protected decodeActionPayload(payload: string): {
    actionId: string;
    value: string | undefined;
  } {
    return { actionId: payload, value: payload };
  }

  async handleWebhook(request: Request, options?: WebhookOptions): Promise<Response> {
    const result = await this.parseVerifiedWebhook(request);
    if (result.kind === "response") return result.response;

    const chat = this.chat;
    if (!chat) {
      this.logger.warn("Chat instance not initialized, ignoring webhook");
      return new Response("EVENT_RECEIVED", { status: 200 });
    }

    for (const entry of result.events) {
      for (const event of entry) {
        await this.dispatchEvent(event, options);
      }
    }

    return new Response("EVENT_RECEIVED", { status: 200 });
  }

  private async dispatchEvent(event: TRawEvent, options?: WebhookOptions): Promise<void> {
    const chat = this.chat;
    if (!chat) return;

    if (event.message_edit) {
      const threadId = this.threadIdForEditedEvent(event);
      await chat.processMessageUpdated(
        {
          adapter: this,
          threadId,
          message: async () => this.parseMessage(event, threadId),
        },
        options,
      );
      return;
    }

    if (event.message?.quick_reply?.payload) {
      await this.dispatchAction(
        event,
        event.message.quick_reply.payload,
        event.message.mid,
        options,
      );
      return;
    }

    if (event.postback) {
      await this.dispatchAction(event, event.postback.payload, event.postback.mid, options);
      return;
    }

    if (event.reaction) {
      const rawEmoji = event.reaction.emoji ?? event.reaction.reaction ?? "";
      const threadId = this.threadIdForEvent(event);
      const reaction: Omit<ReactionEvent<TRawEvent>, "adapter" | "thread"> & {
        adapter: Adapter;
      } = {
        adapter: this,
        threadId,
        messageId: event.reaction.mid,
        emoji: defaultEmojiResolver.fromGChat(rawEmoji),
        rawEmoji,
        added: event.reaction.action === "react",
        user: {
          userId: event.sender.id,
          userName: event.sender.id,
          fullName: event.sender.id,
          isBot: false,
          isMe: false,
        },
        raw: event,
      };
      chat.processReaction(reaction, options);
      return;
    }

    if (event.read) {
      this.logger.debug("Message read confirmation", { watermark: event.read.watermark });
      return;
    }

    if (event.delivery) {
      this.logger.debug("Message delivery confirmation", {
        watermark: event.delivery.watermark,
        mids: event.delivery.mids,
      });
      return;
    }

    if (!isMessagingEventWithMessage(event)) {
      this.logger.debug("Ignoring non-message webhook event");
      return;
    }

    const threadId = this.threadIdForEvent(event);
    if (event.message?.is_echo) {
      // Echoes are cached for history but never re-dispatched.
      this.parseMessage(event);
      return;
    }

    await chat.processMessage(this, threadId, async () => this.parseMessage(event), options);
  }

  private async dispatchAction(
    event: TRawEvent,
    payload: string,
    messageId: string | undefined,
    options?: WebhookOptions,
  ): Promise<void> {
    const chat = this.chat;
    if (!chat) return;
    const threadId = this.threadIdForEvent(event);
    const { actionId, value } = this.decodeActionPayload(payload);
    const action: Omit<ActionEvent<TRawEvent>, "thread" | "openModal"> & {
      adapter: Adapter;
    } = {
      adapter: this,
      actionId,
      value,
      messageId: messageId ?? `action:${event.timestamp}`,
      threadId,
      user: {
        userId: event.sender.id,
        userName: event.sender.id,
        fullName: event.sender.id,
        isBot: false,
        isMe: false,
      },
      raw: event,
    };
    await chat.processAction(action, options);
  }

  // ── Message parsing ───────────────────────────────────────────────────

  parseMessage(raw: TRawEvent, threadId = this.threadIdForEvent(raw)): Message<TRawEvent> {
    const message = normalizeMessagingEvent(raw, threadId, this.botUserId);
    this.cacheMessage(message as Message<TRawEvent>);
    return message as Message<TRawEvent>;
  }

  // ── Outbound ──────────────────────────────────────────────────────────

  protected abstract sendText(
    threadId: string,
    text: string,
    replyToMessageId?: string | null,
  ): Promise<{ messageId: string }>;

  protected abstract sendSenderAction(threadId: string, action: string): Promise<void>;

  /** Read receipts where the platform supports them (messenger mark_seen). */
  protected async sendReadReceipt(_threadId: string): Promise<void> {
    throw new NotImplementedError("Platform does not support read receipts", "markAsRead");
  }

  /** Convert a card to platform content; `template` payload is sent via `sendTemplate`. */
  protected renderCard(card: CardElement): { text?: string; template?: unknown } {
    return { text: this.converter.renderPostable({ card }) };
  }

  /** Send a platform-native template message. */
  protected async sendTemplate(
    _threadId: string,
    _template: unknown,
  ): Promise<{ messageId: string }> {
    throw new NotImplementedError("Platform does not support template messages", "sendTemplate");
  }

  /** Build the raw echo event for a sent message so history is cached. */
  protected abstract buildEchoEvent(
    threadId: string,
    messageId: string,
    text?: string | null,
  ): TRawEvent;

  async postMessage(
    threadId: string,
    message: AdapterPostableMessage,
  ): Promise<RawMessage<TRawEvent>> {
    const card = extractCard(message);
    if (card) {
      const rendered = this.renderCard(card);
      if (rendered.template !== undefined) {
        const result = await this.sendTemplate(threadId, rendered.template);
        this.cacheSentMessage(threadId, result.messageId, null);
        return { id: result.messageId, raw: {} as TRawEvent, threadId };
      }
      const cardText = convertEmojiPlaceholders(rendered.text ?? "", this.emojiFormat);
      if (cardText.trim()) {
        return this.sendTextMessage(threadId, cardText);
      }
    }

    const text = convertEmojiPlaceholders(this.converter.renderPostable(message), this.emojiFormat);
    return this.sendTextMessage(threadId, text);
  }

  protected async sendTextMessage(threadId: string, text: string): Promise<RawMessage<TRawEvent>> {
    const result = await this.sendText(threadId, text, null);
    this.cacheSentMessage(threadId, result.messageId, text);
    return { id: result.messageId, raw: {} as TRawEvent, threadId };
  }

  async reply(
    threadId: string,
    messageId: string,
    message: AdapterPostableMessage,
  ): Promise<RawMessage<TRawEvent>> {
    const text = convertEmojiPlaceholders(this.converter.renderPostable(message), this.emojiFormat);
    const result = await this.sendText(threadId, text, messageId);
    this.cacheSentMessage(threadId, result.messageId, text);
    return { id: result.messageId, raw: {} as TRawEvent, threadId };
  }

  private cacheSentMessage(threadId: string, messageId: string, text: string | null): void {
    this.parseMessage(this.buildEchoEvent(threadId, messageId, text));
  }

  async startTyping(threadId: string): Promise<void> {
    await this.sendSenderAction(threadId, "typing_on");
  }

  async markAsRead(threadId: string, _messageId: string): Promise<void> {
    await this.sendReadReceipt(threadId);
  }

  /** Buffer all chunks and send as one message (no native streaming on DM platforms). */
  async stream(
    threadId: string,
    textStream: AsyncIterable<string | StreamChunk>,
    _options?: StreamOptions,
  ): Promise<RawMessage<TRawEvent>> {
    let accumulated = "";
    for await (const chunk of textStream) {
      if (typeof chunk === "string") {
        accumulated += chunk;
      } else if (chunk.type === "markdown_text") {
        accumulated += chunk.text;
      }
    }
    return this.postMessage(threadId, { markdown: accumulated });
  }

  async editMessage(): Promise<RawMessage<TRawEvent>> {
    throw new NotImplementedError("Platform does not support message edits", "editMessage");
  }

  async deleteMessage(): Promise<void> {
    throw new NotImplementedError("Platform does not support message deletion", "deleteMessage");
  }

  async addReaction(
    _threadId: string,
    _messageId: string,
    _emoji: EmojiValue | string,
  ): Promise<void> {
    throw new NotImplementedError("Reactions are receive-only on this platform", "addReaction");
  }

  async removeReaction(
    _threadId: string,
    _messageId: string,
    _emoji: EmojiValue | string,
  ): Promise<void> {
    throw new NotImplementedError("Reactions are receive-only on this platform", "removeReaction");
  }

  // ── History ───────────────────────────────────────────────────────────

  async fetchMessages(
    threadId: string,
    options: FetchOptions = {},
  ): Promise<FetchResult<TRawEvent>> {
    const messages = [...(this.messageCache.get(threadId) ?? [])].sort((a, b) =>
      this.compareMessages(a, b),
    );
    return this.paginateMessages(messages, options);
  }

  async fetchMessage(_threadId: string, messageId: string): Promise<Message<TRawEvent> | null> {
    return this.findCachedMessage(messageId) ?? null;
  }

  protected findCachedMessage(messageId: string): Message<TRawEvent> | undefined {
    for (const messages of this.messageCache.values()) {
      const found = messages.find((message) => message.id === messageId);
      if (found) return found;
    }
    return undefined;
  }

  async fetchThread(threadId: string): Promise<ThreadInfo> {
    return {
      id: threadId,
      channelId: this.channelIdFromThreadId(threadId),
      channelName: undefined,
      isDM: true,
      metadata: {},
    };
  }

  async fetchChannelInfo(channelId: string): Promise<ChannelInfo> {
    return {
      id: channelId,
      name: undefined,
      isDM: true,
      metadata: {},
    };
  }

  renderFormatted(content: FormattedContent): string {
    return this.converter.fromAst(content);
  }

  // ── Cache helpers ─────────────────────────────────────────────────────

  protected cacheMessage(message: Message<TRawEvent>): void {
    const existing = this.messageCache.get(message.threadId) ?? [];
    const index = existing.findIndex((item) => item.id === message.id);
    if (index >= 0) {
      existing[index] = message;
    } else {
      existing.push(message);
    }
    existing.sort((a, b) => this.compareMessages(a, b));
    this.messageCache.set(message.threadId, existing);
  }

  protected compareMessages(a: Message<TRawEvent>, b: Message<TRawEvent>): number {
    const timeDiff = a.metadata.dateSent.getTime() - b.metadata.dateSent.getTime();
    if (timeDiff !== 0) return timeDiff;
    return this.messageSequence(a.id) - this.messageSequence(b.id);
  }

  protected messageSequence(messageId: string): number {
    const match = messageId.match(MESSAGE_SEQUENCE_PATTERN);
    const seq = match?.[1];
    return seq ? Number.parseInt(seq, 10) : 0;
  }

  protected paginateMessages(
    messages: Message<TRawEvent>[],
    options: FetchOptions,
  ): FetchResult<TRawEvent> {
    const limit = Math.max(1, Math.min(options.limit ?? 50, 100));
    const direction = options.direction ?? "backward";
    if (messages.length === 0) {
      return { messages: [] };
    }
    const indexes = new Map(messages.map((message, index) => [message.id, index]));
    const cursorIndex = options.cursor ? indexes.get(options.cursor) : undefined;
    if (direction === "backward") {
      const end = cursorIndex !== undefined ? cursorIndex : messages.length;
      const start = Math.max(0, end - limit);
      const page = messages.slice(start, end);
      return {
        messages: page,
        nextCursor: start > 0 ? page[0]?.id : undefined,
      };
    }
    const start = cursorIndex !== undefined ? cursorIndex + 1 : 0;
    const end = Math.min(messages.length, start + limit);
    const page = messages.slice(start, end);
    return {
      messages: page,
      nextCursor: end < messages.length ? page.at(-1)?.id : undefined,
    };
  }
}
