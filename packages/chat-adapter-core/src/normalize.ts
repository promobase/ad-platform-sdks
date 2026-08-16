import { Message, parseMarkdown } from "chat";
import type { Attachment } from "chat";

/**
 * Structural shape of provider DM messaging events (shared by messenger and
 * instagram webhooks). Platform packages' typed events are structurally
 * compatible; keep this minimal so TikTok's DM events can match later.
 */
export interface MessagingEventLike {
  sender: { id: string };
  recipient: { id: string };
  timestamp: number;
  message?: {
    mid: string;
    text?: string;
    is_echo?: boolean;
    quick_reply?: { payload?: string };
    attachments?: Array<{ type: string; payload?: { url?: string; id?: string } }>;
    reply_to?: { mid?: string; story?: { id: string; url: string } };
  };
  postback?: { payload: string; mid?: string; title?: string };
  reaction?: { mid: string; action: "react" | "unreact"; emoji?: string; reaction?: string };
  read?: { watermark?: number; mid?: string };
  delivery?: { watermark?: number; mids?: string[] };
}

const MESSAGING_ATTACHMENT_TYPE_MAP: Record<string, Attachment["type"]> = {
  image: "image",
  video: "video",
  audio: "audio",
  file: "file",
  reel: "video",
  ig_reel: "video",
  share: "file",
  story_mention: "image",
};

function mapAttachments(event: MessagingEventLike): Attachment[] {
  const attachments = [...(event.message?.attachments ?? [])];
  const story = event.message?.reply_to?.story;
  if (story?.url) {
    attachments.push({ type: "story_mention", payload: { id: story.id, url: story.url } });
  }
  return attachments.map((a) => {
    const type = MESSAGING_ATTACHMENT_TYPE_MAP[a.type] ?? "file";
    return {
      type,
      ...(a.payload?.url ? { url: a.payload.url } : {}),
      ...(a.payload?.id ? { fetchMetadata: { platformMediaId: a.payload.id } } : {}),
    };
  });
}

/**
 * Normalize a provider DM messaging event into a Chat SDK Message.
 *
 * The author is the conversation partner: `sender` for inbound messages, the
 * `recipient` for page echoes (`is_echo`). `isMe` follows the official
 * adapter guidance — page-authored echoes are ignored by Chat SDK dispatch,
 * and `isMention: true` mirrors the official adapters so handlers can rely on
 * a uniform message shape.
 */
export function normalizeMessagingEvent(
  event: MessagingEventLike,
  threadId: string,
): Message<MessagingEventLike> {
  const message = event.message;
  if (!message) {
    throw new Error(`Messaging event without a message payload: ${JSON.stringify(event)}`);
  }
  const isEcho = Boolean(message.is_echo);
  const authorId = isEcho ? event.recipient.id : event.sender.id;
  const text = message.text ?? event.postback?.title ?? "";

  return new Message({
    id: message.mid,
    threadId,
    text,
    formatted: parseMarkdown(text),
    raw: event,
    author: {
      userId: authorId,
      userName: authorId,
      fullName: authorId,
      isBot: isEcho,
      isMe: isEcho,
    },
    metadata: {
      dateSent: new Date(event.timestamp),
      edited: false,
    },
    attachments: mapAttachments(event),
    isMention: true,
  });
}

/** True when the event carries a message payload (skips read/reaction events). */
export function isMessagingEventWithMessage(
  event: MessagingEventLike,
): event is MessagingEventLike & { message: NonNullable<MessagingEventLike["message"]> } {
  return Boolean(event.message);
}
