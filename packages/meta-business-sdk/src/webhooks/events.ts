import type {
  FacebookChange,
  FacebookMessagingEvent,
  FacebookWebhookPayload,
  InstagramChange,
  InstagramMessagingEvent,
  InstagramWebhookPayload,
  WhatsAppMessage,
  WhatsAppStatus,
  WhatsAppWebhookPayload,
} from "./schemas.ts";

type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

type EventContext = {
  readonly entryId: string;
  readonly entryTime: number;
};

export type FacebookWebhookEvent =
  | (EventContext & {
      readonly kind: "message" | "echo";
      readonly event: WithRequired<FacebookMessagingEvent, "message">;
    })
  | (EventContext & {
      readonly kind: "quick_reply";
      readonly event: WithRequired<FacebookMessagingEvent, "message">;
    })
  | (EventContext & {
      readonly kind: "postback";
      readonly event: WithRequired<FacebookMessagingEvent, "postback">;
    })
  | (EventContext & {
      readonly kind: "referral";
      readonly event: WithRequired<FacebookMessagingEvent, "referral">;
    })
  | (EventContext & {
      readonly kind: "delivery";
      readonly event: WithRequired<FacebookMessagingEvent, "delivery">;
    })
  | (EventContext & {
      readonly kind: "read";
      readonly event: WithRequired<FacebookMessagingEvent, "read">;
    })
  | (EventContext & {
      readonly kind: "reaction";
      readonly event: WithRequired<FacebookMessagingEvent, "reaction">;
    })
  | (EventContext & {
      readonly kind: "message_edit";
      readonly event: WithRequired<FacebookMessagingEvent, "message_edit">;
    })
  | (EventContext & {
      readonly kind: "comment_change";
      readonly change: FacebookChange;
    })
  | (EventContext & {
      readonly kind: "unknown";
      readonly event?: FacebookMessagingEvent;
      readonly change?: FacebookChange;
    });

export type InstagramWebhookEvent =
  | (EventContext & {
      readonly kind: "message" | "echo";
      readonly event: WithRequired<InstagramMessagingEvent, "message">;
    })
  | (EventContext & {
      readonly kind: "quick_reply";
      readonly event: WithRequired<InstagramMessagingEvent, "message">;
    })
  | (EventContext & {
      readonly kind: "postback";
      readonly event: WithRequired<InstagramMessagingEvent, "postback">;
    })
  | (EventContext & {
      readonly kind: "referral";
      readonly event: WithRequired<InstagramMessagingEvent, "referral">;
    })
  | (EventContext & {
      readonly kind: "delivery";
      readonly event: WithRequired<InstagramMessagingEvent, "delivery">;
    })
  | (EventContext & {
      readonly kind: "read";
      readonly event: WithRequired<InstagramMessagingEvent, "read">;
    })
  | (EventContext & {
      readonly kind: "reaction";
      readonly event: WithRequired<InstagramMessagingEvent, "reaction">;
    })
  | (EventContext & {
      readonly kind: "message_edit";
      readonly event: WithRequired<InstagramMessagingEvent, "message_edit">;
    })
  | (EventContext & {
      readonly kind: "comment_change" | "message_edit_change" | "message_reaction_change";
      readonly change: InstagramChange;
    })
  | (EventContext & {
      readonly kind: "unknown";
      readonly event?: InstagramMessagingEvent;
      readonly change?: InstagramChange;
    });

export type WhatsAppWebhookEvent =
  | (EventContext & {
      readonly kind: "message";
      readonly message: WhatsAppMessage;
      readonly phoneNumberId: string;
      readonly wabaId: string;
    })
  | (EventContext & {
      readonly kind: "status";
      readonly status: WhatsAppStatus;
      readonly phoneNumberId: string;
      readonly wabaId: string;
    })
  | (EventContext & {
      readonly kind: "unknown";
      readonly value: unknown;
      readonly phoneNumberId: string;
      readonly wabaId: string;
    });

function context(entry: { id: string; time: number }): EventContext {
  return { entryId: entry.id, entryTime: entry.time };
}

export function getFacebookWebhookEvents(
  payload: FacebookWebhookPayload,
): readonly FacebookWebhookEvent[] {
  const events: FacebookWebhookEvent[] = [];
  for (const entry of payload.entry) {
    const entryContext = context(entry);
    for (const event of entry.messaging ?? []) {
      let emitted = false;
      if (event.message) {
        events.push({
          ...entryContext,
          kind: event.message.is_echo ? "echo" : "message",
          event: { ...event, message: event.message },
        });
        emitted = true;
        if (event.message.quick_reply) {
          events.push({
            ...entryContext,
            kind: "quick_reply",
            event: { ...event, message: event.message },
          });
        }
      }
      if (event.postback) {
        events.push({
          ...entryContext,
          kind: "postback",
          event: { ...event, postback: event.postback },
        });
        emitted = true;
      }
      if (event.referral) {
        events.push({
          ...entryContext,
          kind: "referral",
          event: { ...event, referral: event.referral },
        });
        emitted = true;
      }
      if (event.delivery) {
        events.push({
          ...entryContext,
          kind: "delivery",
          event: { ...event, delivery: event.delivery },
        });
        emitted = true;
      }
      if (event.read) {
        events.push({ ...entryContext, kind: "read", event: { ...event, read: event.read } });
        emitted = true;
      }
      if (event.reaction) {
        events.push({
          ...entryContext,
          kind: "reaction",
          event: { ...event, reaction: event.reaction },
        });
        emitted = true;
      }
      if (event.message_edit) {
        events.push({
          ...entryContext,
          kind: "message_edit",
          event: { ...event, message_edit: event.message_edit },
        });
        emitted = true;
      }
      if (!emitted) events.push({ ...entryContext, kind: "unknown", event });
    }
    for (const change of entry.changes ?? []) {
      events.push({ ...entryContext, kind: "comment_change", change });
    }
  }
  return events;
}

export function getInstagramWebhookEvents(
  payload: InstagramWebhookPayload,
): readonly InstagramWebhookEvent[] {
  const events: InstagramWebhookEvent[] = [];
  for (const entry of payload.entry) {
    const entryContext = context(entry);
    for (const event of entry.messaging ?? []) {
      let emitted = false;
      if (event.message) {
        events.push({
          ...entryContext,
          kind: event.message.is_echo ? "echo" : "message",
          event: { ...event, message: event.message },
        });
        emitted = true;
        if (event.message.quick_reply) {
          events.push({
            ...entryContext,
            kind: "quick_reply",
            event: { ...event, message: event.message },
          });
        }
      }
      if (event.postback) {
        events.push({
          ...entryContext,
          kind: "postback",
          event: { ...event, postback: event.postback },
        });
        emitted = true;
      }
      if (event.referral) {
        events.push({
          ...entryContext,
          kind: "referral",
          event: { ...event, referral: event.referral },
        });
        emitted = true;
      }
      if (event.delivery) {
        events.push({
          ...entryContext,
          kind: "delivery",
          event: { ...event, delivery: event.delivery },
        });
        emitted = true;
      }
      if (event.read) {
        events.push({ ...entryContext, kind: "read", event: { ...event, read: event.read } });
        emitted = true;
      }
      if (event.reaction) {
        events.push({
          ...entryContext,
          kind: "reaction",
          event: { ...event, reaction: event.reaction },
        });
        emitted = true;
      }
      if (event.message_edit) {
        events.push({
          ...entryContext,
          kind: "message_edit",
          event: { ...event, message_edit: event.message_edit },
        });
        emitted = true;
      }
      if (!emitted) events.push({ ...entryContext, kind: "unknown", event });
    }
    for (const change of entry.changes ?? []) {
      events.push({
        ...entryContext,
        kind:
          change.field === "comments"
            ? "comment_change"
            : change.field === "message_edit"
              ? "message_edit_change"
              : "message_reaction_change",
        change,
      });
    }
  }
  return events;
}

export function getWhatsAppWebhookEvents(
  payload: WhatsAppWebhookPayload,
): readonly WhatsAppWebhookEvent[] {
  const events: WhatsAppWebhookEvent[] = [];
  for (const entry of payload.entry) {
    for (const change of entry.changes) {
      const entryContext = { entryId: entry.id, entryTime: 0 };
      const { metadata, messages, statuses } = change.value;
      for (const message of messages ?? []) {
        events.push({
          ...entryContext,
          kind: "message",
          message,
          phoneNumberId: metadata.phone_number_id,
          wabaId: entry.id,
        });
      }
      for (const status of statuses ?? []) {
        events.push({
          ...entryContext,
          kind: "status",
          status,
          phoneNumberId: metadata.phone_number_id,
          wabaId: entry.id,
        });
      }
      if (!messages?.length && !statuses?.length) {
        events.push({
          ...entryContext,
          kind: "unknown",
          value: change.value,
          phoneNumberId: metadata.phone_number_id,
          wabaId: entry.id,
        });
      }
    }
  }
  return events;
}
