import type {
  FacebookChange,
  FacebookMessagingEvent,
  FacebookWebhookPayload,
  InstagramChange,
  InstagramMessagingEvent,
  InstagramWebhookPayload,
  ThreadsWebhookPayload,
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
      readonly type: "message" | "echo";
      readonly data: WithRequired<FacebookMessagingEvent, "message">;
    })
  | (EventContext & {
      readonly type: "quick_reply";
      readonly data: WithRequired<FacebookMessagingEvent, "message">;
    })
  | (EventContext & {
      readonly type: "postback";
      readonly data: WithRequired<FacebookMessagingEvent, "postback">;
    })
  | (EventContext & {
      readonly type: "referral";
      readonly data: WithRequired<FacebookMessagingEvent, "referral">;
    })
  | (EventContext & {
      readonly type: "delivery";
      readonly data: WithRequired<FacebookMessagingEvent, "delivery">;
    })
  | (EventContext & {
      readonly type: "read";
      readonly data: WithRequired<FacebookMessagingEvent, "read">;
    })
  | (EventContext & {
      readonly type: "reaction";
      readonly data: WithRequired<FacebookMessagingEvent, "reaction">;
    })
  | (EventContext & {
      readonly type: "message_edit";
      readonly data: WithRequired<FacebookMessagingEvent, "message_edit">;
    })
  | (EventContext & {
      readonly type: "optin";
      readonly data: WithRequired<FacebookMessagingEvent, "optin">;
    })
  | (EventContext & {
      readonly type: "account_linking";
      readonly data: WithRequired<FacebookMessagingEvent, "account_linking">;
    })
  | (EventContext & {
      readonly type: "pass_thread_control" | "take_thread_control" | "request_thread_control";
      readonly data: FacebookMessagingEvent;
    })
  | (EventContext & {
      readonly type: "standby";
      readonly data: FacebookMessagingEvent;
    })
  | (EventContext & {
      readonly type: "comment_change";
      readonly data: FacebookChange;
    })
  | (EventContext & {
      readonly type: "unknown";
      readonly data?: FacebookMessagingEvent | FacebookChange;
    });

export type InstagramWebhookEvent =
  | (EventContext & {
      readonly type: "message" | "echo";
      readonly data: WithRequired<InstagramMessagingEvent, "message">;
    })
  | (EventContext & {
      readonly type: "quick_reply";
      readonly data: WithRequired<InstagramMessagingEvent, "message">;
    })
  | (EventContext & {
      readonly type: "postback";
      readonly data: WithRequired<InstagramMessagingEvent, "postback">;
    })
  | (EventContext & {
      readonly type: "referral";
      readonly data: WithRequired<InstagramMessagingEvent, "referral">;
    })
  | (EventContext & {
      readonly type: "delivery";
      readonly data: WithRequired<InstagramMessagingEvent, "delivery">;
    })
  | (EventContext & {
      readonly type: "read";
      readonly data: WithRequired<InstagramMessagingEvent, "read">;
    })
  | (EventContext & {
      readonly type: "reaction";
      readonly data: WithRequired<InstagramMessagingEvent, "reaction">;
    })
  | (EventContext & {
      readonly type: "message_edit";
      readonly data: WithRequired<InstagramMessagingEvent, "message_edit">;
    })
  | (EventContext & {
      readonly type: "optin";
      readonly data: WithRequired<InstagramMessagingEvent, "optin">;
    })
  | (EventContext & {
      readonly type: "account_linking";
      readonly data: WithRequired<InstagramMessagingEvent, "account_linking">;
    })
  | (EventContext & {
      readonly type: "pass_thread_control" | "take_thread_control" | "request_thread_control";
      readonly data: InstagramMessagingEvent;
    })
  | (EventContext & {
      readonly type:
        | "comment_change"
        | "message_edit_change"
        | "message_reaction_change"
        | "mention_change"
        | "live_comment_change"
        | "story_insights_change";
      readonly data: InstagramChange;
    })
  | (EventContext & {
      readonly type: "standby";
      readonly data: InstagramMessagingEvent;
    })
  | (EventContext & {
      readonly type: "unknown";
      readonly data?: InstagramMessagingEvent | InstagramChange;
    });

export type WhatsAppWebhookEvent =
  | (EventContext & {
      readonly type: "message";
      readonly data: WhatsAppMessage;
      readonly phoneNumberId: string;
      readonly wabaId: string;
    })
  | (EventContext & {
      readonly type: "status";
      readonly data: WhatsAppStatus;
      readonly phoneNumberId: string;
      readonly wabaId: string;
    })
  | (EventContext & {
      readonly type: "unknown";
      readonly data: unknown;
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
          type: event.message.is_echo ? "echo" : "message",
          data: { ...event, message: event.message },
        });
        emitted = true;
        if (event.message.quick_reply) {
          events.push({
            ...entryContext,
            type: "quick_reply",
            data: { ...event, message: event.message },
          });
        }
      }
      if (event.postback) {
        events.push({
          ...entryContext,
          type: "postback",
          data: { ...event, postback: event.postback },
        });
        emitted = true;
      }
      if (event.referral) {
        events.push({
          ...entryContext,
          type: "referral",
          data: { ...event, referral: event.referral },
        });
        emitted = true;
      }
      if (event.delivery) {
        events.push({
          ...entryContext,
          type: "delivery",
          data: { ...event, delivery: event.delivery },
        });
        emitted = true;
      }
      if (event.read) {
        events.push({ ...entryContext, type: "read", data: { ...event, read: event.read } });
        emitted = true;
      }
      if (event.reaction) {
        events.push({
          ...entryContext,
          type: "reaction",
          data: { ...event, reaction: event.reaction },
        });
        emitted = true;
      }
      if (event.message_edit) {
        events.push({
          ...entryContext,
          type: "message_edit",
          data: { ...event, message_edit: event.message_edit },
        });
        emitted = true;
      }
      if (event.optin) {
        events.push({ ...entryContext, type: "optin", data: { ...event, optin: event.optin } });
        emitted = true;
      }
      if (event.account_linking) {
        events.push({
          ...entryContext,
          type: "account_linking",
          data: { ...event, account_linking: event.account_linking },
        });
        emitted = true;
      }
      for (const type of [
        "pass_thread_control",
        "take_thread_control",
        "request_thread_control",
      ] as const) {
        if (event[type]) {
          events.push({ ...entryContext, type, data: event });
          emitted = true;
        }
      }
      if (!emitted) events.push({ ...entryContext, type: "unknown", data: event });
    }
    for (const change of entry.changes ?? []) {
      events.push({ ...entryContext, type: "comment_change", data: change });
    }
    for (const event of entry.standby ?? []) {
      events.push({ ...entryContext, type: "standby", data: event });
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
          type: event.message.is_echo ? "echo" : "message",
          data: { ...event, message: event.message },
        });
        emitted = true;
        if (event.message.quick_reply) {
          events.push({
            ...entryContext,
            type: "quick_reply",
            data: { ...event, message: event.message },
          });
        }
      }
      if (event.postback) {
        events.push({
          ...entryContext,
          type: "postback",
          data: { ...event, postback: event.postback },
        });
        emitted = true;
      }
      if (event.referral) {
        events.push({
          ...entryContext,
          type: "referral",
          data: { ...event, referral: event.referral },
        });
        emitted = true;
      }
      if (event.delivery) {
        events.push({
          ...entryContext,
          type: "delivery",
          data: { ...event, delivery: event.delivery },
        });
        emitted = true;
      }
      if (event.read) {
        events.push({ ...entryContext, type: "read", data: { ...event, read: event.read } });
        emitted = true;
      }
      if (event.reaction) {
        events.push({
          ...entryContext,
          type: "reaction",
          data: { ...event, reaction: event.reaction },
        });
        emitted = true;
      }
      if (event.message_edit) {
        events.push({
          ...entryContext,
          type: "message_edit",
          data: { ...event, message_edit: event.message_edit },
        });
        emitted = true;
      }
      if (event.optin) {
        events.push({ ...entryContext, type: "optin", data: { ...event, optin: event.optin } });
        emitted = true;
      }
      if (event.account_linking) {
        events.push({
          ...entryContext,
          type: "account_linking",
          data: { ...event, account_linking: event.account_linking },
        });
        emitted = true;
      }
      for (const type of [
        "pass_thread_control",
        "take_thread_control",
        "request_thread_control",
      ] as const) {
        if (event[type]) {
          events.push({ ...entryContext, type, data: event });
          emitted = true;
        }
      }
      if (!emitted) events.push({ ...entryContext, type: "unknown", data: event });
    }
    for (const change of entry.changes ?? []) {
      events.push({
        ...entryContext,
        type:
          change.field === "comments"
            ? "comment_change"
            : change.field === "message_edit"
              ? "message_edit_change"
              : change.field === "message_reactions"
                ? "message_reaction_change"
                : change.field === "mentions"
                  ? "mention_change"
                  : change.field === "live_comments"
                    ? "live_comment_change"
                    : "story_insights_change",
        data: change,
      });
    }
    for (const event of entry.standby ?? []) {
      events.push({ ...entryContext, type: "standby", data: event });
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
          type: "message",
          data: message,
          phoneNumberId: metadata.phone_number_id,
          wabaId: entry.id,
        });
      }
      for (const status of statuses ?? []) {
        events.push({
          ...entryContext,
          type: "status",
          data: status,
          phoneNumberId: metadata.phone_number_id,
          wabaId: entry.id,
        });
      }
      if (!messages?.length && !statuses?.length) {
        events.push({
          ...entryContext,
          type: "unknown",
          data: change.value,
          phoneNumberId: metadata.phone_number_id,
          wabaId: entry.id,
        });
      }
    }
  }
  return events;
}

/** Value of a Threads webhook delivery (id/username/text/root_post/owner...). */
export type ThreadsChangeValue = ThreadsWebhookPayload["values"]["value"];

export type ThreadsWebhookEvent =
  | (EventContext & {
      readonly type: "replies" | "delete" | "publish" | "mentions";
      readonly value: ThreadsChangeValue;
    })
  | (EventContext & {
      readonly type: "unknown";
      readonly value?: ThreadsChangeValue;
    });

export function getThreadsWebhookEvents(
  payload: ThreadsWebhookPayload,
): readonly ThreadsWebhookEvent[] {
  const entryContext: EventContext = { entryId: payload.target_id, entryTime: payload.time };
  const value = payload.values.value;
  const field = payload.values.field;

  if (field === "replies" || field === "delete" || field === "publish" || field === "mentions") {
    return [{ ...entryContext, type: field, value }];
  }
  return [{ ...entryContext, type: "unknown", value }];
}
