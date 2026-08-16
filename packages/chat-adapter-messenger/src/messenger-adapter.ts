import {
  AdapterRateLimitError,
  AuthenticationError,
  NetworkError,
  ResourceNotFoundError,
  ValidationError,
} from "@chat-adapter/shared";
import {
  ChatMessagingAdapterBase,
  dmThreadId,
  verifyHubInbound,
} from "@openpromo/chat-adapter-core";
import { Facebook, FacebookApiError, fbWebhookPayloadSchema } from "@openpromo/meta";
import type { FBWebhookMessagingEvent } from "@openpromo/meta";
import type { CardElement, Logger } from "chat";

import { cardToMessenger, decodeMessengerCallbackData } from "./cards.ts";
import type { MessengerTemplatePayload } from "./cards.ts";

const MESSENGER_MESSAGE_LIMIT = 2000;

export interface MessengerThreadId {
  /** Page-scoped user id (PSID). */
  userId: string;
}

export interface MessengerAdapterOptions {
  /** Meta app secret, used to verify X-Hub-Signature-256. */
  appSecret: string;
  /** Webhook verify token shared with Meta during subscription. */
  verifyToken: string;
  /** Page access token for outbound sends. */
  accessToken: string;
  /** Facebook Page id. */
  pageId: string;
  /** Optional Graph API version override. */
  apiVersion?: string;
  userName?: string;
  logger?: Logger;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/**
 * Facebook Messenger DM adapter. Thread id format `messenger:{userId}`
 * mirrors the official @chat-adapter/messenger. Sends go through
 * `@openpromo/meta`'s Facebook Page messaging client.
 *
 * Feature parity with the official adapter: messages, echoes, postbacks and
 * quick replies (actions), reactions (receive), read/delivery receipts,
 * cards → Generic/Button templates, buffered streaming, typing, mark-seen,
 * truncation, and cached message history with cursor pagination.
 */
export class MessengerAdapter extends ChatMessagingAdapterBase<
  MessengerThreadId,
  FBWebhookMessagingEvent
> {
  readonly name = "messenger";

  private readonly appSecret: string;
  private readonly verifyToken: string;
  private readonly pageClient: ReturnType<typeof Facebook.createClient>;

  constructor(options: MessengerAdapterOptions) {
    super({
      adapterName: "messenger",
      userName: options.userName,
      logger: options.logger,
      emojiFormat: "messenger",
    });
    this.appSecret = options.appSecret;
    this.verifyToken = options.verifyToken;
    this.pageClient = Facebook.createClient({
      pageId: options.pageId,
      accessToken: options.accessToken,
      apiVersion: options.apiVersion,
      fetch: options.fetch,
      signal: options.signal,
    });
  }

  override async initialize(chat: import("chat").ChatInstance): Promise<void> {
    await super.initialize(chat);
    try {
      const me = await this.pageClient.api.client.get<{ id: string; name: string }>("me", {
        fields: ["id", "name"],
      });
      this.botUserId = me.id;
    } catch (error) {
      this.logger.warn("Failed to fetch Messenger page identity", { error: String(error) });
    }
  }

  encodeThreadId(data: MessengerThreadId): string {
    return dmThreadId({ platform: "messenger", accountId: "", userId: data.userId });
  }

  decodeThreadId(threadId: string): MessengerThreadId {
    if (!threadId.startsWith("messenger:")) {
      throw new ValidationError("messenger", `Invalid messenger thread id: ${threadId}`);
    }
    const userId = threadId.slice("messenger:".length);
    if (!userId) {
      throw new ValidationError("messenger", `Invalid messenger thread id: ${threadId}`);
    }
    return { userId };
  }

  protected threadIdForEvent(event: FBWebhookMessagingEvent): string {
    const isEcho = Boolean(event.message?.is_echo);
    const userId = isEcho ? event.recipient.id : event.sender.id;
    return this.encodeThreadId({ userId });
  }

  protected threadIdForUser(userId: string): MessengerThreadId {
    return { userId };
  }

  protected async verifyInbound(request: Request, body: string): Promise<Response | null> {
    return verifyHubInbound(request, body, {
      appSecret: this.appSecret,
      verifyToken: this.verifyToken,
    });
  }

  protected async parseWebhook(body: string): Promise<FBWebhookMessagingEvent[][]> {
    const parsed = fbWebhookPayloadSchema.safeParse(JSON.parse(body));
    if (!parsed.success) {
      const detail =
        parsed.error instanceof Error ? parsed.error.message : "Invalid webhook payload";
      throw new Error(detail);
    }
    return parsed.data.entry.map((entry) => entry.messaging ?? []);
  }

  protected override decodeActionPayload(payload: string): {
    actionId: string;
    value: string | undefined;
  } {
    return decodeMessengerCallbackData(payload);
  }

  protected override renderCard(card: CardElement): { text?: string; template?: unknown } {
    const result = cardToMessenger(card);
    if (result.type === "template") {
      return { template: result.payload };
    }
    return { text: result.text };
  }

  protected override async sendTemplate(
    threadId: string,
    template: MessengerTemplatePayload,
  ): Promise<{ messageId: string }> {
    const { userId } = this.decodeThreadId(threadId);
    return this.mapGraphError(() => this.pageClient.messaging.sendTemplate(userId, template));
  }

  protected override async sendText(
    threadId: string,
    text: string,
    replyToMessageId?: string | null,
  ): Promise<{ messageId: string }> {
    const { userId } = this.decodeThreadId(threadId);
    const truncated = truncateMessage(text);
    if (!truncated.trim()) {
      throw new ValidationError("messenger", "Message text cannot be empty");
    }
    return this.mapGraphError(() =>
      replyToMessageId
        ? this.pageClient.messaging.reply(userId, replyToMessageId, truncated)
        : this.pageClient.messaging.send(userId, { text: truncated }),
    );
  }

  protected override async sendSenderAction(threadId: string, action: string): Promise<void> {
    const { userId } = this.decodeThreadId(threadId);
    await this.mapGraphError(() =>
      this.pageClient.messaging.sendSenderAction(userId, action as "typing_on"),
    );
  }

  protected override async sendReadReceipt(threadId: string): Promise<void> {
    const { userId } = this.decodeThreadId(threadId);
    await this.mapGraphError(() => this.pageClient.messaging.sendSenderAction(userId, "mark_seen"));
  }

  protected override buildEchoEvent(
    threadId: string,
    messageId: string,
    text?: string | null,
  ): FBWebhookMessagingEvent {
    const { userId } = this.decodeThreadId(threadId);
    return {
      sender: { id: this.botUserId ?? "" },
      recipient: { id: userId },
      timestamp: Date.now(),
      message: {
        mid: messageId,
        ...(text ? { text } : {}),
        is_echo: true,
      },
    };
  }

  private async mapGraphError<T>(fn: () => Promise<T>): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      if (error instanceof FacebookApiError) {
        if (error.status === 429 || [4, 32, 613].includes(error.code)) {
          throw new AdapterRateLimitError("messenger");
        }
        if (error.status === 401 || error.code === 190) {
          throw new AuthenticationError("messenger", error.message);
        }
        if (error.status === 403 || [10, 200].includes(error.code)) {
          throw new ValidationError("messenger", error.message);
        }
        if (error.status === 404) {
          throw new ResourceNotFoundError("messenger", "message");
        }
        throw new NetworkError(
          "messenger",
          `${error.message} (status ${error.status}, code ${error.code})`,
        );
      }
      throw error;
    }
  }
}

function truncateMessage(text: string): string {
  if (text.length <= MESSENGER_MESSAGE_LIMIT) return text;
  return `${text.slice(0, MESSENGER_MESSAGE_LIMIT - 3)}...`;
}
