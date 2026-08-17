import {
  AdapterRateLimitError,
  AuthenticationError,
  extractCard,
  extractFiles,
  extractPostableAttachments,
  NetworkError,
  ResourceNotFoundError,
  ValidationError,
} from "@chat-adapter/shared";
import {
  ChatMessagingAdapterBase,
  dmThreadId,
  verifyHubInbound,
} from "@openpromo/chat-adapter-core";
import {
  FacebookApiError,
  Instagram,
  createGraphClient,
  igWebhookPayloadSchema,
} from "@openpromo/meta";
import type { IGWebhookMessagingEvent } from "@openpromo/meta";
import type {
  InstagramMessageEditChange,
  InstagramMessageReactionChange,
} from "@openpromo/meta/webhooks";
import type { AdapterPostableMessage, Attachment, CardElement, Logger } from "chat";

import { cardToInstagram, decodeInstagramCallbackData } from "./cards.ts";
import type {
  InstagramCardResult,
  InstagramQuickReply,
  InstagramTemplatePayload,
} from "./cards.ts";

const INSTAGRAM_MESSAGE_BYTE_LIMIT = 1000;
const IMAGE_SIZE_LIMIT = 8 * 1024 * 1024;
const OTHER_MEDIA_SIZE_LIMIT = 25 * 1024 * 1024;
const WINDOW_ERROR_CODES = new Set([1_545_041]);
const WINDOW_ERROR_SUBCODES = new Set([2_018_278, 2_534_022]);

type InstagramMediaType = "audio" | "file" | "image" | "video";

interface ResolvedInstagramMedia {
  attachmentId?: string;
  type: InstagramMediaType;
  url?: string;
}

export interface InstagramThreadId {
  /** IG professional account id. */
  accountId: string;
  /** Instagram-scoped user id (IGSID). */
  userId: string;
}

export interface InstagramPostOptions {
  /** HUMAN_AGENT lets real support agents reply within 7 days. */
  messageTag?: "HUMAN_AGENT";
}

export interface InstagramAdapterOptions {
  /** Unique Chat SDK adapter name when multiple accounts share one runtime. */
  adapterName?: string;
  /** Meta app secret, used to verify X-Hub-Signature-256. */
  appSecret: string;
  /** Webhook verify token shared with Meta during subscription. */
  verifyToken: string;
  /** Instagram access token (Instagram Login / graph.instagram.com). */
  accessToken: string;
  /** Instagram professional account id. */
  accountId: string;
  /** Optional Graph API version override. */
  apiVersion?: string;
  userName?: string;
  logger?: Logger;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  persistThreadHistory?: boolean;
}

/**
 * Synthetic DM event built from a `changes` webhook entry (`message_edit`).
 */
export interface IGEditChangeEvent {
  sender: { id: string };
  recipient: { id: string };
  timestamp: number;
  message_edit: {
    mid: string;
    text?: string | null;
    num_edit?: number;
    from?: { id?: string; username?: string };
  };
}

/** Synthetic DM event built from a `changes` webhook entry (`message_reactions`). */
export interface IGReactionChangeEvent {
  sender: { id: string };
  recipient: { id: string };
  timestamp: number;
  reaction: {
    mid: string;
    action: "react" | "unreact";
    emoji?: string;
    reaction?: string;
  };
}

/** Every inbound DM event the adapter dispatches (messaging + changes). */
export type IGWebhookInboundEvent =
  | IGWebhookMessagingEvent
  | IGEditChangeEvent
  | IGReactionChangeEvent;

/**
 * Instagram DM adapter. Thread id format `instagram:{accountId}:{userId}`
 * mirrors the official @chat-adapter/instagram. Sends go through
 * `@openpromo/meta`'s Instagram messaging client.
 *
 * Feature parity with the official adapter: messages, echoes, quick replies
 * and postbacks (actions), reactions (receive), story replies, media
 * (uploaded or HTTPS URL), cards → templates/quick replies, buffered
 * streaming, typing, UTF-8 truncation, HUMAN_AGENT tag, window-error mapping,
 * and cached message history with cursor pagination.
 */
export class InstagramAdapter extends ChatMessagingAdapterBase<
  InstagramThreadId,
  IGWebhookInboundEvent
> {
  private readonly appSecret: string;
  private readonly verifyToken: string;
  private readonly accessToken: string;
  private readonly accountId: string;
  private readonly api: ReturnType<typeof createGraphClient>;
  private readonly igClient: ReturnType<typeof Instagram.createClient>;

  constructor(options: InstagramAdapterOptions) {
    super({
      adapterName: options.adapterName ?? "instagram",
      userName: options.userName,
      logger: options.logger,
      emojiFormat: "messenger",
      persistThreadHistory: options.persistThreadHistory,
    });
    this.appSecret = options.appSecret;
    this.verifyToken = options.verifyToken;
    this.accessToken = options.accessToken;
    this.accountId = options.accountId;
    this.botUserId = options.accountId;
    this.userName = options.userName ?? "instagram";
    this.api = createGraphClient({
      accessToken: options.accessToken,
      apiVersion: options.apiVersion,
      fetch: options.fetch,
      signal: options.signal,
    });
    this.igClient = Instagram.createClient({
      api: this.api,
      igAccountId: options.accountId,
      accessToken: options.accessToken,
      fetch: options.fetch,
      signal: options.signal,
    });
  }

  override async initialize(chat: import("chat").ChatInstance): Promise<void> {
    await super.initialize(chat);
    try {
      const profile = await this.api.client.get<{
        id: string;
        name?: string;
        username?: string;
      }>(this.accountId, { fields: ["id", "name", "username"] });
      this.botUserId = profile.id;
      this.userName = profile.username ?? profile.name ?? this.userName;
    } catch (error) {
      this.logger.warn("Failed to fetch Instagram account identity", { error: String(error) });
    }
  }

  encodeThreadId(data: InstagramThreadId): string {
    return dmThreadId({ platform: "instagram", accountId: data.accountId, userId: data.userId });
  }

  decodeThreadId(threadId: string): InstagramThreadId {
    const prefix = `instagram:${this.accountId}:`;
    if (!threadId.startsWith(prefix)) {
      throw new ValidationError("instagram", `Invalid instagram thread id: ${threadId}`);
    }
    const userId = threadId.slice(prefix.length);
    if (!userId) {
      throw new ValidationError("instagram", `Invalid instagram thread id: ${threadId}`);
    }
    return { accountId: this.accountId, userId };
  }

  protected threadIdForEvent(event: IGWebhookInboundEvent): string {
    const isEcho = Boolean("message" in event ? event.message?.is_echo : false);
    const userId = isEcho ? event.recipient.id : event.sender.id;
    return this.encodeThreadId({ accountId: this.accountId, userId });
  }

  /**
   * Edit-change payloads carry only the editor's id (no original recipient),
   * so the thread resolves from the cached message when available.
   */
  protected override threadIdForEditedEvent(event: IGWebhookInboundEvent): string {
    if (!("message_edit" in event) || !event.message_edit) return this.threadIdForEvent(event);
    const cached = this.findCachedMessage(event.message_edit.mid);
    if (cached) return cached.threadId;
    return this.threadIdForEvent(event);
  }

  protected threadIdForUser(userId: string): InstagramThreadId {
    return { accountId: this.accountId, userId };
  }

  protected async verifyInbound(request: Request, body: string): Promise<Response | null> {
    return verifyHubInbound(request, body, {
      appSecret: this.appSecret,
      verifyToken: this.verifyToken,
    });
  }

  protected async parseWebhook(body: string): Promise<IGWebhookInboundEvent[][]> {
    const parsed = igWebhookPayloadSchema.safeParse(JSON.parse(body));
    if (!parsed.success) {
      const detail =
        parsed.error instanceof Error ? parsed.error.message : "Invalid webhook payload";
      throw new Error(detail);
    }
    return parsed.data.entry.map((entry) => [
      ...(entry.messaging ?? []),
      ...synthesizeChangeEvents(entry.changes ?? [], this.accountId),
    ]);
  }

  protected override decodeActionPayload(payload: string): {
    actionId: string;
    value: string | undefined;
  } {
    return decodeInstagramCallbackData(payload);
  }

  // ── Outbound ──────────────────────────────────────────────────────────

  override async postMessage(
    threadId: string,
    message: AdapterPostableMessage,
    options: InstagramPostOptions = {},
  ): Promise<import("chat").RawMessage<IGWebhookMessagingEvent>> {
    const mediaItems: Array<import("chat").FileUpload | Attachment> = [
      ...extractFiles(message),
      ...extractPostableAttachments(message),
    ];
    let lastResult: import("chat").RawMessage<IGWebhookMessagingEvent> | undefined;

    for (const item of mediaItems) {
      const media = await this.resolveMedia(item);
      lastResult = await this.sendMediaMessage(threadId, media, options);
    }

    const card = extractCard(message);
    if (card) {
      const result = cardToInstagram(card);
      if (result.type === "quick_replies") {
        return this.sendQuickReplies(threadId, result, options);
      }
      if (result.type === "template") {
        return this.sendTemplateMessage(threadId, result.payload, options);
      }
      if (result.text.trim()) {
        return this.sendTextMessage(threadId, result.text, options);
      }
      if (lastResult) return lastResult;
    }

    const text = this.renderPostableText(message);
    if (text.trim()) {
      return this.sendTextMessage(threadId, text, options);
    }
    if (lastResult) return lastResult;
    throw new ValidationError("instagram", "Message must include text, a card, or an attachment");
  }

  /** HUMAN_AGENT tag allows real support agents to reply within 7 days. */
  async sendHumanAgentMessage(
    threadId: string,
    message: AdapterPostableMessage,
  ): Promise<import("chat").RawMessage<IGWebhookMessagingEvent>> {
    return this.postMessage(threadId, message, { messageTag: "HUMAN_AGENT" });
  }

  protected override async sendTextMessage(
    threadId: string,
    text: string,
    options: InstagramPostOptions = {},
  ): Promise<import("chat").RawMessage<IGWebhookMessagingEvent>> {
    const truncated = truncateUtf8(text, INSTAGRAM_MESSAGE_BYTE_LIMIT);
    if (!truncated.trim()) {
      throw new ValidationError("instagram", "Message text cannot be empty");
    }
    const result = await this.sendApiRequest(threadId, {
      message: { text: truncated },
      ...deliveryFields(options),
    });
    return this.buildSentMessage(threadId, result, { text: truncated });
  }

  protected async sendQuickReplies(
    threadId: string,
    result: { text: string; quickReplies: InstagramQuickReply[] },
    options: InstagramPostOptions,
  ): Promise<import("chat").RawMessage<IGWebhookMessagingEvent>> {
    const truncated = truncateUtf8(result.text, INSTAGRAM_MESSAGE_BYTE_LIMIT);
    const sendResult = await this.sendApiRequest(threadId, {
      message: { text: truncated, quick_replies: result.quickReplies },
      ...deliveryFields(options),
    });
    return this.buildSentMessage(threadId, sendResult, { text: truncated });
  }

  protected async sendTemplateMessage(
    threadId: string,
    payload: InstagramTemplatePayload,
    options: InstagramPostOptions,
  ): Promise<import("chat").RawMessage<IGWebhookMessagingEvent>> {
    const { userId } = this.decodeThreadId(threadId);
    const result = await this.mapGraphError(() =>
      this.igClient.messaging.sendTemplate(userId, payload),
    );
    return this.buildSentMessage(threadId, result, {});
  }

  protected async sendMediaMessage(
    threadId: string,
    media: ResolvedInstagramMedia,
    options: InstagramPostOptions,
  ): Promise<import("chat").RawMessage<IGWebhookMessagingEvent>> {
    const { userId } = this.decodeThreadId(threadId);
    const attachment = media.attachmentId
      ? { type: media.type, attachmentId: media.attachmentId }
      : { type: media.type, url: media.url ?? "" };
    const result = await this.mapGraphError(() =>
      this.igClient.messaging.sendAttachment(userId, attachment),
    );
    return this.buildSentMessage(threadId, result, {});
  }

  protected async sendApiRequest(
    threadId: string,
    body: Record<string, unknown>,
  ): Promise<{ messageId: string }> {
    const { accountId, userId } = this.decodeThreadId(threadId);
    return this.mapGraphError(async () => {
      const result = await this.igClient.api.client.post<{
        message_id: string;
        recipient_id: string;
      }>(`${accountId}/messages`, { recipient: { id: userId }, ...body });
      return { messageId: result.message_id };
    });
  }

  protected buildSentMessage(
    threadId: string,
    result: { messageId: string },
    message: Partial<NonNullable<IGWebhookMessagingEvent["message"]>> = {},
  ): import("chat").RawMessage<IGWebhookMessagingEvent> {
    const { userId } = this.decodeThreadId(threadId);
    const raw: IGWebhookMessagingEvent = {
      sender: { id: this.botUserId ?? this.accountId },
      recipient: { id: userId },
      timestamp: Date.now(),
      message: { mid: result.messageId, is_echo: true, ...message },
    };
    this.parseMessage(raw);
    return { id: result.messageId, raw, threadId };
  }

  protected renderPostableText(message: AdapterPostableMessage): string {
    if (typeof message === "string") return message;
    if (
      typeof message === "object" &&
      message !== null &&
      ("markdown" in message || "raw" in message || "ast" in message)
    ) {
      return this.converter.renderPostable(message);
    }
    return "";
  }

  protected override renderCard(card: CardElement): { text?: string; template?: unknown } {
    const result: InstagramCardResult = cardToInstagram(card);
    if (result.type === "template") return { template: result.payload };
    if (result.type === "quick_replies") return { text: result.text };
    return { text: result.text };
  }

  protected override async sendTemplate(
    threadId: string,
    template: unknown,
  ): Promise<{ messageId: string }> {
    const { userId } = this.decodeThreadId(threadId);
    return this.mapGraphError(() =>
      this.igClient.messaging.sendTemplate(userId, template as InstagramTemplatePayload),
    );
  }

  protected override async sendText(
    threadId: string,
    text: string,
    replyToMessageId?: string | null,
  ): Promise<{ messageId: string }> {
    const { userId } = this.decodeThreadId(threadId);
    const truncated = truncateUtf8(text, INSTAGRAM_MESSAGE_BYTE_LIMIT);
    if (!truncated.trim()) {
      throw new ValidationError("instagram", "Message text cannot be empty");
    }
    const result = replyToMessageId
      ? await this.igClient.messaging.reply(userId, replyToMessageId, truncated)
      : await this.igClient.messaging.send(userId, { text: truncated });
    return { messageId: result.messageId };
  }

  protected override async sendSenderAction(threadId: string, action: string): Promise<void> {
    const { userId } = this.decodeThreadId(threadId);
    await this.igClient.messaging.sendSenderAction(userId, action as "typing_on");
  }

  protected override buildEchoEvent(
    threadId: string,
    messageId: string,
    text?: string | null,
  ): IGWebhookMessagingEvent {
    const { userId } = this.decodeThreadId(threadId);
    return {
      sender: { id: this.botUserId ?? this.accountId },
      recipient: { id: userId },
      timestamp: Date.now(),
      message: {
        mid: messageId,
        ...(text ? { text } : {}),
        is_echo: true,
      },
    };
  }

  rehydrateAttachmentoverride(attachment: Attachment): Attachment {
    if (!attachment.url) return attachment;
    return {
      ...attachment,
      fetchData: async () => this.downloadAttachment(attachment.url ?? ""),
    };
  }

  protected async downloadAttachment(url: string): Promise<Buffer> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new NetworkError("instagram", `Failed to download attachment: ${response.status}`);
    }
    return Buffer.from(await response.arrayBuffer());
  }

  // ── Media ─────────────────────────────────────────────────────────────

  protected async resolveMedia(
    item: import("chat").FileUpload | Attachment,
  ): Promise<ResolvedInstagramMedia> {
    if ("filename" in item) {
      const mimeType = item.mimeType ?? inferMimeType(item.filename);
      const type = mediaTypeFromMime(mimeType);
      const buffer = await toInstagramBuffer(item.data);
      validateMediaSize(type, buffer.length);
      return {
        type,
        attachmentId: await this.uploadMedia(type, buffer, item.filename, mimeType),
      };
    }

    const type = item.type;
    const data = item.data ?? (item.fetchData ? await item.fetchData() : undefined);
    if (data) {
      const buffer = await toInstagramBuffer(data);
      validateMediaSize(type, buffer.length);
      const filename = item.name ?? `attachment.${extensionForType(type)}`;
      const mimeType = item.mimeType ?? inferMimeType(filename);
      return {
        type,
        attachmentId: await this.uploadMedia(type, buffer, filename, mimeType),
      };
    }

    if (!item.url?.startsWith("https://")) {
      throw new ValidationError(
        "instagram",
        "Attachment requires binary data or a public HTTPS URL",
      );
    }
    if (typeof item.size === "number") {
      validateMediaSize(type, item.size);
    }
    return { type, url: item.url };
  }

  protected async uploadMedia(
    type: InstagramMediaType,
    data: Buffer,
    filename: string,
    mimeType: string,
  ): Promise<string> {
    const { attachmentId } = await this.igClient.messaging.uploadAttachment(
      type,
      new Blob([new Uint8Array(data)], { type: mimeType }),
      filename,
    );
    return attachmentId;
  }

  // ── Error mapping ─────────────────────────────────────────────────────

  private async mapGraphError<T>(fn: () => Promise<T>): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      if (error instanceof FacebookApiError) {
        const code = error.code;
        const subcode = error.subcode;
        const message = error.message;
        if (
          WINDOW_ERROR_CODES.has(code) ||
          (subcode !== undefined && WINDOW_ERROR_SUBCODES.has(subcode)) ||
          message.toLowerCase().includes("outside the allowed window")
        ) {
          throw new ValidationError(
            "instagram",
            "Instagram's 24-hour messaging window has expired. A human agent may use sendHumanAgentMessage() within 7 days when the app has the required permission.",
          );
        }
        if (error.status === 429 || [4, 32, 613].includes(code)) {
          throw new AdapterRateLimitError("instagram");
        }
        if (error.status === 401 || code === 190) {
          throw new AuthenticationError("instagram", message);
        }
        if (error.status === 403 || [10, 200].includes(code)) {
          throw new ValidationError("instagram", message);
        }
        if (error.status === 404) {
          throw new ResourceNotFoundError("instagram", "message");
        }
        throw new NetworkError("instagram", `${message} (status ${error.status}, code ${code})`);
      }
      throw error;
    }
  }
}

function deliveryFields(options: InstagramPostOptions): Record<string, string> {
  if (options.messageTag === "HUMAN_AGENT") {
    return { messaging_type: "MESSAGE_TAG", tag: "HUMAN_AGENT" };
  }
  return { messaging_type: "RESPONSE" };
}

function truncateUtf8(text: string, maxBytes: number): string {
  const encoder = new TextEncoder();
  if (encoder.encode(text).byteLength <= maxBytes) return text;
  const suffix = "...";
  const available = maxBytes - encoder.encode(suffix).byteLength;
  let result = "";
  for (const character of text) {
    if (encoder.encode(result + character).byteLength > available) break;
    result += character;
  }
  return result + suffix;
}

async function toInstagramBuffer(data: Buffer | Blob | ArrayBuffer): Promise<Buffer> {
  if (Buffer.isBuffer(data)) return data;
  if (data instanceof ArrayBuffer) return Buffer.from(data);
  if (data instanceof Blob) return Buffer.from(await data.arrayBuffer());
  throw new ValidationError("instagram", "Unsupported file data type");
}

function inferMimeType(filename: string): string {
  const extension = filename.toLowerCase().split(".").pop();
  const types: Record<string, string> = {
    aac: "audio/aac",
    avi: "video/x-msvideo",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    m4a: "audio/mp4",
    mov: "video/quicktime",
    mp3: "audio/mpeg",
    mp4: "video/mp4",
    ogg: "audio/ogg",
    pdf: "application/pdf",
    png: "image/png",
    wav: "audio/wav",
    webm: "video/webm",
  };
  return types[extension ?? ""] ?? "application/octet-stream";
}

function mediaTypeFromMime(mimeType: string): InstagramMediaType {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.startsWith("audio/")) return "audio";
  return "file";
}

function validateMediaSize(type: InstagramMediaType, size: number): void {
  const limit = type === "image" ? IMAGE_SIZE_LIMIT : OTHER_MEDIA_SIZE_LIMIT;
  if (size > limit) {
    throw new ValidationError(
      "instagram",
      `${type} attachment exceeds Instagram's ${limit / 1024 / 1024} MB limit`,
    );
  }
}

function extensionForType(type: InstagramMediaType): string {
  if (type === "image") return "jpg";
  if (type === "video") return "mp4";
  if (type === "audio") return "m4a";
  return "pdf";
}

function synthesizeChangeEvents(
  changes: NonNullable<import("@openpromo/meta").IGWebhookPayload["entry"][number]["changes"]>,
  accountId: string,
): IGWebhookInboundEvent[] {
  const events: IGWebhookInboundEvent[] = [];
  for (const change of changes) {
    if (change.field === "message_edit") {
      // Narrow the tolerant change union to the message_edit member.
      const value = (change as InstagramMessageEditChange).value;
      events.push({
        sender: { id: value.from?.id ?? "" },
        recipient: { id: accountId },
        timestamp: (value.timestamp ?? Math.floor(Date.now() / 1000)) * 1000,
        message_edit: {
          mid: value.mid,
          ...(value.text !== undefined && value.text !== null ? { text: value.text } : {}),
          ...(value.num_edit !== undefined ? { num_edit: value.num_edit } : {}),
          ...(value.from ? { from: value.from } : {}),
        },
      });
    } else if (change.field === "message_reactions") {
      // Narrow the tolerant change union to the message_reactions member.
      const value = (change as InstagramMessageReactionChange).value;
      const action = value.action ?? (value.verb === "remove" ? "unreact" : "react");
      events.push({
        sender: { id: value.from?.id ?? "" },
        recipient: { id: accountId },
        timestamp: (value.timestamp ?? Math.floor(Date.now() / 1000)) * 1000,
        reaction: {
          mid: value.mid,
          action,
          ...(value.emoji ? { emoji: value.emoji } : {}),
          ...(value.reaction ? { reaction: value.reaction } : {}),
        },
      });
    }
  }
  return events;
}
