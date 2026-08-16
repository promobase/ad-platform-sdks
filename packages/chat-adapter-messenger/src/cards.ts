import type {
  ActionsElement,
  ButtonElement,
  CardChild,
  CardElement,
  FieldsElement,
  LinkButtonElement,
  TextElement,
} from "chat";

/**
 * Convert Chat SDK cards to Messenger templates (Generic/Button) or a text
 * fallback, and encode/decode postback callback data. Ported from the official
 * @chat-adapter/messenger cards module; template shapes use the
 * @openpromo/meta Facebook messaging client's camelCase contract.
 */

const CALLBACK_DATA_PREFIX = "chat:";

const MAX_BUTTONS = 3;
const MAX_BUTTON_TITLE_LENGTH = 20;
const MAX_SUBTITLE_LENGTH = 80;
const MAX_BUTTON_TEMPLATE_TEXT_LENGTH = 640;
const MAX_TITLE_LENGTH = 80;

export type MessengerButton =
  | { type: "postback"; title: string; payload: string }
  | { type: "web_url"; title: string; url: string };

export type MessengerTemplatePayload =
  | {
      type: "generic";
      elements: Array<{
        title: string;
        imageUrl?: string;
        subtitle?: string;
        buttons?: readonly MessengerButton[];
      }>;
    }
  | { type: "button"; text: string; buttons: readonly MessengerButton[] };

export type MessengerCardResult =
  | { type: "template"; payload: MessengerTemplatePayload }
  | { type: "text"; text: string };

interface MessengerCardActionPayload {
  a: string;
  v?: string;
}

/** Encode an action id and optional value as `chat:{json}` callback data. */
export function encodeMessengerCallbackData(actionId: string, value?: string): string {
  const payload: MessengerCardActionPayload = { a: actionId };
  if (typeof value === "string") {
    payload.v = value;
  }
  return `${CALLBACK_DATA_PREFIX}${JSON.stringify(payload)}`;
}

/** Decode callback data; legacy/external payloads pass through raw. */
export function decodeMessengerCallbackData(data?: string): {
  actionId: string;
  value: string | undefined;
} {
  if (!data) {
    return { actionId: "messenger_callback", value: undefined };
  }
  if (!data.startsWith(CALLBACK_DATA_PREFIX)) {
    return { actionId: data, value: data };
  }
  try {
    const decoded = JSON.parse(
      data.slice(CALLBACK_DATA_PREFIX.length),
    ) as MessengerCardActionPayload;
    if (typeof decoded.a === "string" && decoded.a) {
      return { actionId: decoded.a, value: typeof decoded.v === "string" ? decoded.v : undefined };
    }
  } catch {
    // Malformed callback data is passed through for third-party payloads.
  }
  return { actionId: data, value: data };
}

export function cardToMessenger(card: CardElement): MessengerCardResult {
  if (hasUnsupportedElements(card.children)) {
    return { type: "text", text: cardToMessengerText(card) };
  }

  const actions = findActions(card.children);
  const buttons = actions ? extractButtons(actions) : null;

  if (buttons && buttons.length > 0 && buttons.length <= MAX_BUTTONS) {
    const allButtonsFit = buttons.every((btn) => btn.title.length <= MAX_BUTTON_TITLE_LENGTH);
    if (allButtonsFit) {
      if (card.title || card.imageUrl) {
        return { type: "template", payload: buildGenericTemplate(card, buttons) };
      }
      const bodyText = buildBodyText(card);
      if (bodyText) {
        return { type: "template", payload: buildButtonTemplate(bodyText, buttons) };
      }
    }
  }

  return { type: "text", text: cardToMessengerText(card) };
}

export function cardToMessengerText(card: CardElement): string {
  const lines: string[] = [];
  if (card.title) lines.push(card.title);
  if (card.subtitle) lines.push(card.subtitle);
  if ((card.title || card.subtitle) && card.children.length > 0) lines.push("");
  if (card.imageUrl) {
    lines.push(card.imageUrl);
    lines.push("");
  }
  for (let i = 0; i < card.children.length; i++) {
    const childLines = renderChild(card.children[i]!);
    if (childLines.length > 0) {
      lines.push(...childLines);
      if (i < card.children.length - 1) lines.push("");
    }
  }
  return lines.join("\n");
}

function buildGenericTemplate(
  card: CardElement,
  buttons: MessengerButton[],
): MessengerTemplatePayload {
  const bodyText = buildBodyText(card);
  const title = card.title || bodyText || "Menu";
  const subtitle = card.subtitle || (card.title && bodyText ? bodyText : null);
  return {
    type: "generic",
    elements: [
      {
        title: truncate(title, MAX_TITLE_LENGTH),
        ...(subtitle ? { subtitle: truncate(subtitle, MAX_SUBTITLE_LENGTH) } : {}),
        ...(card.imageUrl ? { imageUrl: card.imageUrl } : {}),
        buttons,
      },
    ],
  };
}

function buildButtonTemplate(text: string, buttons: MessengerButton[]): MessengerTemplatePayload {
  return {
    type: "button",
    text: truncate(text, MAX_BUTTON_TEMPLATE_TEXT_LENGTH),
    buttons,
  };
}

function hasUnsupportedElements(children: CardChild[]): boolean {
  for (const child of children) {
    if (child.type === "table") return true;
    if (child.type === "section" && hasUnsupportedElements(child.children)) return true;
    if (child.type === "actions") {
      for (const action of child.children) {
        if (action.type === "select" || action.type === "radio_select") return true;
      }
    }
  }
  return false;
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

function extractButtons(actions: ActionsElement): MessengerButton[] | null {
  const buttons: MessengerButton[] = [];
  for (const child of actions.children) {
    if (child.type === "button" && child.id) {
      buttons.push({
        type: "postback",
        title: truncate(child.label, MAX_BUTTON_TITLE_LENGTH),
        payload: encodeMessengerCallbackData(child.id, child.value),
      });
    } else if (child.type === "link-button") {
      buttons.push({
        type: "web_url",
        title: truncate(child.label, MAX_BUTTON_TITLE_LENGTH),
        url: child.url,
      });
    }
  }
  return buttons.length === 0 ? null : buttons.slice(0, MAX_BUTTONS);
}

function buildBodyText(card: CardElement): string {
  const parts: string[] = [];
  for (const child of card.children) {
    if (child.type === "actions") continue;
    const text = childToPlainText(child);
    if (text) parts.push(text);
  }
  return parts.join("\n");
}

function renderChild(child: CardChild): string[] {
  switch (child.type) {
    case "text":
      return renderText(child);
    case "fields":
      return renderFields(child);
    case "actions":
      return renderActions(child);
    case "section":
      return child.children.flatMap(renderChild);
    case "image":
      return child.alt ? [`${child.alt}: ${child.url}`] : [child.url];
    case "divider":
      return ["---"];
    case "link":
      return [`${child.label}: ${child.url}`];
    case "table":
      return renderTable(child);
    default:
      return [];
  }
}

function renderText(text: TextElement): string[] {
  return [text.content];
}

function renderFields(fields: FieldsElement): string[] {
  return fields.children.map((field) => `${field.label}: ${field.value}`);
}

function renderActions(actions: ActionsElement): string[] {
  const buttonTexts = actions.children.map((button) => {
    if (button.type === "link-button") return `${button.label}: ${button.url}`;
    return `[${button.label}]`;
  });
  return [buttonTexts.join(" | ")];
}

function renderTable(table: CardChild): string[] {
  if (table.type !== "table") return [];
  const lines: string[] = [];
  if (table.headers.length > 0) {
    lines.push(table.headers.join(" | "));
    lines.push(table.headers.map(() => "---").join(" | "));
  }
  for (const row of table.rows) {
    lines.push(row.join(" | "));
  }
  return lines;
}

function childToPlainText(child: CardChild): string | null {
  switch (child.type) {
    case "text":
      return child.content;
    case "fields":
      return child.children.map((f) => `${f.label}: ${f.value}`).join("\n");
    case "actions":
      return null;
    case "section":
      return child.children.map(childToPlainText).filter(Boolean).join("\n");
    case "link":
      return `${child.label}: ${child.url}`;
    default:
      return null;
  }
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}\u2026`;
}
