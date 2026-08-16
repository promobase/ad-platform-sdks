import type {
  ActionsElement,
  ButtonElement,
  CardChild,
  CardElement,
  LinkButtonElement,
} from "chat";
import { cardChildToFallbackText, parseMarkdown, toPlainText } from "chat";

/**
 * Convert Chat SDK cards to Instagram content — templates, quick replies, or
 * a text fallback — and encode/decode quick-reply/postback callback data.
 * Ported from the official @chat-adapter/instagram cards module; payload
 * shapes use the @openpromo/meta Instagram messaging client's camelCase
 * contract.
 */

const CALLBACK_DATA_PREFIX = "chat:";

const MAX_TEMPLATE_BUTTONS = 3;
const MAX_QUICK_REPLIES = 13;
const MAX_BUTTON_TITLE_LENGTH = 20;
const MAX_QUICK_REPLY_TITLE_LENGTH = 20;
const MAX_TITLE_LENGTH = 80;
const MAX_SUBTITLE_LENGTH = 80;
const MAX_BUTTON_TEMPLATE_TEXT_LENGTH = 640;

export type InstagramButton =
  | { type: "postback"; title: string; payload: string }
  | { type: "web_url"; title: string; url: string };

export type InstagramQuickReply = {
  contentType: "text" | "user_phone_number" | "user_email";
  title: string;
  payload: string;
};

export type InstagramTemplatePayload =
  | {
      type: "generic";
      elements: Array<{
        title: string;
        imageUrl?: string;
        subtitle?: string;
        buttons?: readonly InstagramButton[];
      }>;
    }
  | { type: "button"; text: string; buttons: readonly InstagramButton[] };

export type InstagramCardResult =
  | { type: "quick_replies"; text: string; quickReplies: InstagramQuickReply[] }
  | { type: "template"; payload: InstagramTemplatePayload }
  | { type: "text"; text: string };

interface InstagramCardActionPayload {
  a: string;
  v?: string;
}

/** Encode an action id and optional value as `chat:{json}` callback data. */
export function encodeInstagramCallbackData(actionId: string, value?: string): string {
  const payload: InstagramCardActionPayload = { a: actionId };
  if (typeof value === "string") {
    payload.v = value;
  }
  return `${CALLBACK_DATA_PREFIX}${JSON.stringify(payload)}`;
}

/** Decode callback data; legacy/external payloads pass through raw. */
export function decodeInstagramCallbackData(data?: string): {
  actionId: string;
  value: string | undefined;
} {
  if (!data) {
    return { actionId: "instagram_callback", value: undefined };
  }
  if (!data.startsWith(CALLBACK_DATA_PREFIX)) {
    return { actionId: data, value: data };
  }
  try {
    const decoded = JSON.parse(
      data.slice(CALLBACK_DATA_PREFIX.length),
    ) as InstagramCardActionPayload;
    if (typeof decoded.a === "string" && decoded.a) {
      return { actionId: decoded.a, value: typeof decoded.v === "string" ? decoded.v : undefined };
    }
  } catch {
    // Malformed callback data is passed through for third-party payloads.
  }
  return { actionId: data, value: data };
}

export function cardToInstagram(card: CardElement): InstagramCardResult {
  const text = cardToInstagramText(card);
  const actions = findActions(card.children);

  if (actions) {
    const quickReplies = extractQuickReplies(actions);
    if (
      quickReplies.length > 0 &&
      quickReplies.length === actions.children.length &&
      quickReplies.length <= MAX_QUICK_REPLIES
    ) {
      return {
        type: "quick_replies",
        text: text || "Choose an option",
        quickReplies,
      };
    }

    const buttons = extractTemplateButtons(actions);
    if (buttons.length > 0 && buttons.length <= MAX_TEMPLATE_BUTTONS) {
      if (card.title || card.imageUrl) {
        const title = card.title || text || "Message";
        return {
          type: "template",
          payload: {
            type: "generic",
            elements: [
              {
                title: truncate(title, MAX_TITLE_LENGTH),
                ...(card.subtitle
                  ? { subtitle: truncate(card.subtitle, MAX_SUBTITLE_LENGTH) }
                  : {}),
                ...(card.imageUrl ? { imageUrl: card.imageUrl } : {}),
                buttons,
              },
            ],
          },
        };
      }

      if (text) {
        return {
          type: "template",
          payload: {
            type: "button",
            text: truncate(text, MAX_BUTTON_TEMPLATE_TEXT_LENGTH),
            buttons,
          },
        };
      }
    }
  }

  return { type: "text", text };
}

export function cardToInstagramText(card: CardElement): string {
  const parts: string[] = [];
  if (card.title) parts.push(markdownToPlainText(card.title));
  if (card.subtitle) parts.push(markdownToPlainText(card.subtitle));
  for (const child of card.children) {
    const text = cardChildToFallbackText(child);
    if (text) parts.push(markdownToPlainText(text));
  }
  return parts.join("\n");
}

function markdownToPlainText(text: string): string {
  return toPlainText(parseMarkdown(text)).trim();
}

function findActions(children: CardChild[]): ActionsElement | null {
  for (const child of children) {
    if (child.type === "actions") return child;
    if (child.type === "section") {
      const nested = findActions(child.children);
      if (nested) return nested;
    }
  }
  return null;
}

function extractQuickReplies(actions: ActionsElement): InstagramQuickReply[] {
  const replies: InstagramQuickReply[] = [];
  for (const action of actions.children) {
    if (action.type !== "button" || !action.id) continue;
    replies.push({
      contentType: "text",
      title: truncate(action.label, MAX_QUICK_REPLY_TITLE_LENGTH),
      payload: encodeInstagramCallbackData(action.id, action.value),
    });
  }
  return replies.slice(0, MAX_QUICK_REPLIES);
}

function extractTemplateButtons(actions: ActionsElement): InstagramButton[] {
  const buttons: InstagramButton[] = [];
  for (const action of actions.children) {
    if (action.type === "button" && action.id) {
      buttons.push({
        type: "postback",
        title: truncate(action.label, MAX_BUTTON_TITLE_LENGTH),
        payload: encodeInstagramCallbackData(action.id, action.value),
      });
    } else if (action.type === "link-button") {
      buttons.push({
        type: "web_url",
        title: truncate(action.label, MAX_BUTTON_TITLE_LENGTH),
        url: action.url,
      });
    }
  }
  return buttons.slice(0, MAX_TEMPLATE_BUTTONS);
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}\u2026`;
}
