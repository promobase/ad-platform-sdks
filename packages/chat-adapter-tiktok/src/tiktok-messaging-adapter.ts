import { ValidationError } from "@chat-adapter/shared";
import { ChatMessagingAdapterBase, type MessagingEventLike } from "@openpromo/chat-adapter-core";
import { TikTok, dmEventTypes } from "@openpromo/tiktok";
import type { DMWebhookEvent, TikTokWebhookEvent } from "@openpromo/tiktok";
import { NotImplementedError } from "chat";
import type { Logger } from "chat";

import { verifyTikTokInbound } from "./verify-inbound.ts";
import { collectTikTokWebhookEvents } from "./webhook-events.ts";

const TIKTOK_MESSAGE_BYTE_LIMIT = 1000;

export interface TikTokDmThreadId {
  conversationId: string;
}

/**
 * Synthesized DM event: the base dispatches on MessagingEventLike, while the
 * conversation id (the thread key) rides alongside.
 */
export interface TikTokDMMessageEvent extends MessagingEventLike {
  conversationId: string;
  rawEvent: DMWebhookEvent;
}

export interface TikTokMessagingAdapterOptions {
  /** TikTok Business app secret, used to verify the TikTok-Signature header. */
  appSecret: string;
  /** TikTok Business API access token. */
  accessToken: string;
  /** TikTok Business id. */
  businessId: string;
  /** Maximum acceptable webhook signature age in seconds (default 300). */
  maxSignatureAgeSeconds?: number;
  userName?: string;
  logger?: Logger;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/**
 * TikTok Business Messaging DM adapter. Thread id format
 * `tiktok:{businessId}:dm:{conversationId}`.
 *
 * Handles `im_receive_msg` / `im_referral_msg` (inbound), `im_send_msg`
 * (echoes, cached), and `im_mark_read_msg` (read receipts). Sends go through
 * the Business Messaging API — note the platform's 10 automated
 * messages/48h limit.
 */
export class TikTokMessagingAdapter extends ChatMessagingAdapterBase<
  TikTokDmThreadId,
  TikTokDMMessageEvent
> {
  readonly name = "tiktok";

  private readonly appSecret: string;
  private readonly businessId: string;
  private readonly maxSignatureAgeSeconds: number;
  private readonly client: ReturnType<typeof TikTok.createClient>;

  constructor(options: TikTokMessagingAdapterOptions) {
    super({
      adapterName: "tiktok",
      userName: options.userName,
      logger: options.logger,
      emojiFormat: "messenger",
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

  encodeThreadId(data: TikTokDmThreadId): string {
    return `tiktok:${this.businessId}:dm:${data.conversationId}`;
  }

  decodeThreadId(threadId: string): TikTokDmThreadId {
    const prefix = `tiktok:${this.businessId}:dm:`;
    if (!threadId.startsWith(prefix)) {
      throw new ValidationError("tiktok", `Invalid tiktok dm thread id: ${threadId}`);
    }
    const conversationId = threadId.slice(prefix.length);
    if (!conversationId) {
      throw new ValidationError("tiktok", `Invalid tiktok dm thread id: ${threadId}`);
    }
    return { conversationId };
  }

  protected threadIdForEvent(event: TikTokDMMessageEvent): string {
    return this.encodeThreadId({ conversationId: event.conversationId });
  }

  protected threadIdForUser(): TikTokDmThreadId {
    throw new NotImplementedError(
      "TikTok DMs require an existing conversation; openDM is unsupported",
      "openDM",
    );
  }

  protected async verifyInbound(request: Request, body: string): Promise<Response | null> {
    return verifyTikTokInbound(request, body, {
      appSecret: this.appSecret,
      maxSignatureAgeSeconds: this.maxSignatureAgeSeconds,
    });
  }

  protected async parseWebhook(body: string): Promise<TikTokDMMessageEvent[][]> {
    const payload = JSON.parse(body) as unknown;
    const events: TikTokDMMessageEvent[] = [];
    for (const event of collectTikTokWebhookEvents(payload)) {
      const synthesized = synthesizeDmEvent(event, this.businessId);
      if (synthesized) events.push(synthesized);
    }
    return [events];
  }

  protected async sendText(
    threadId: string,
    text: string,
    replyToMessageId?: string | null,
  ): Promise<{ messageId: string }> {
    const { conversationId } = this.decodeThreadId(threadId);
    const truncated = truncateUtf8(text, TIKTOK_MESSAGE_BYTE_LIMIT);
    if (!truncated.trim()) {
      throw new ValidationError("tiktok", "Message text cannot be empty");
    }
    const result = await this.client.messaging.sendMessage({
      conversationId,
      messageType: "TEXT",
      text: { body: truncated },
      ...(replyToMessageId ? { referencedMessageId: replyToMessageId } : {}),
    });
    return { messageId: result.messageId };
  }

  protected async sendSenderAction(threadId: string, action: string): Promise<void> {
    const { conversationId } = this.decodeThreadId(threadId);
    await this.client.messaging.sendMessage({
      conversationId,
      messageType: "SENDER_ACTION",
      senderAction: action === "typing_on" ? "TYPING" : "MARK_READ",
    });
  }

  protected override async sendReadReceipt(threadId: string): Promise<void> {
    await this.sendSenderAction(threadId, "mark_read");
  }

  protected buildEchoEvent(
    threadId: string,
    messageId: string,
    text?: string | null,
  ): TikTokDMMessageEvent {
    const { conversationId } = this.decodeThreadId(threadId);
    return {
      conversationId,
      sender: { id: "" },
      recipient: { id: "" },
      timestamp: Date.now(),
      message: {
        mid: messageId,
        ...(text ? { text } : {}),
        is_echo: true,
      },
      rawEvent: {} as DMWebhookEvent,
    };
  }
}

function synthesizeDmEvent(
  event: TikTokWebhookEvent,
  businessId: string,
): TikTokDMMessageEvent | undefined {
  const content = event.content;
  if (typeof content !== "object" || content === null) return undefined;
  const record = content as Record<string, unknown>;
  const conversationId =
    typeof record.conversation_id === "string" ? record.conversation_id : undefined;
  const messageId = typeof record.message_id === "string" ? record.message_id : undefined;
  const timestamp = typeof record.timestamp === "number" ? record.timestamp * 1000 : Date.now();
  const from = typeof record.from === "string" ? record.from : undefined;
  const to = typeof record.to === "string" ? record.to : undefined;
  const rawText = typeof record.content === "string" ? (record.content as string) : undefined;

  switch (event.event) {
    case dmEventTypes.RECEIVE_MESSAGE:
    case dmEventTypes.RECEIVE_MESSAGE_EU:
    case dmEventTypes.REFERRAL_MESSAGE:
      if (!conversationId || !messageId) return undefined;
      return {
        conversationId,
        sender: { id: from ?? "" },
        recipient: { id: to ?? "" },
        timestamp,
        message: { mid: messageId, ...(rawText ? { text: rawText } : {}) },
        rawEvent: event as DMWebhookEvent,
      };
    case dmEventTypes.SEND_MESSAGE:
      if (!conversationId || !messageId) return undefined;
      return {
        conversationId,
        sender: { id: from ?? businessId },
        recipient: { id: to ?? "" },
        timestamp,
        message: { mid: messageId, ...(rawText ? { text: rawText } : {}), is_echo: true },
        rawEvent: event as DMWebhookEvent,
      };
    case dmEventTypes.MARK_READ_MESSAGE:
      if (!conversationId) return undefined;
      return {
        conversationId,
        sender: { id: from ?? "" },
        recipient: { id: to ?? "" },
        timestamp,
        read: { watermark: timestamp },
        rawEvent: event as DMWebhookEvent,
      };
    default:
      // Auto-message config updates and high-intent-comment notifications are
      // not conversation events.
      return undefined;
  }
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
