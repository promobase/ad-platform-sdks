import type { Message } from "chat";

/**
 * Provider-neutral event kinds exposed to transport-owned webhook callers.
 *
 * The open string tail is intentional: adapters may expose a new event class
 * (for example an email delivery or an iMessage-specific action) without
 * forcing this shared package to become a registry of every provider event.
 */
export type AdapterWebhookEventKind =
  | "message"
  | "message_updated"
  | "message_deleted"
  | "action"
  | "reaction"
  | "read"
  | "delivery"
  | (string & {});

/**
 * A verified, thread-normalized webhook event.
 *
 * This is deliberately not an OpenPromo Inbox event. The adapter owns
 * provider-specific parsing and thread identity; the application owns account
 * and workspace binding, persistence, deduplication, and domain routing.
 * `metadata` is the escape hatch for adapter-specific facts that do not belong
 * in this small shared vocabulary (email headers, iMessage service metadata,
 * comment post context, and so on).
 */
export type AdapterWebhookEvent<TRaw = unknown, TMetadata = Record<string, unknown>> = {
  kind: AdapterWebhookEventKind;
  threadId: string;
  /** Provider-stable event identity when the webhook surface exposes one. */
  eventId?: string;
  message?: Message<TRaw>;
  messageId?: string;
  action?: {
    id: string;
    value?: string;
  };
  reaction?: {
    added: boolean;
    rawEmoji: string;
  };
  raw: TRaw;
  isSelf?: boolean;
  metadata?: TMetadata;
};

export type AdapterWebhookParseResult<TRaw = unknown, TMetadata = Record<string, unknown>> =
  | { kind: "response"; response: Response }
  | { kind: "events"; events: AdapterWebhookEvent<TRaw, TMetadata>[] };

/**
 * Minimal webhook source contract for adapters that do not use the DM or
 * comment Chat SDK bases (for example a future iMessage or email adapter).
 */
export interface AdapterWebhookSource<TRaw = unknown, TMetadata = Record<string, unknown>> {
  parseWebhookEvents(request: Request): Promise<AdapterWebhookParseResult<TRaw, TMetadata>>;
}
