import type {
  MessengerAttachment,
  MessengerGenericTemplateElement,
  MessengerMediaTemplateElement,
  MessengerQuickReply,
  MessengerSendOptions,
  MessengerTemplate,
  MessengerTemplateButton,
} from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type PageNode = ReturnType<CreateClientReturn["page"]>;

function buttonBody(button: MessengerTemplateButton): Record<string, unknown> {
  return {
    type: button.type,
    title: button.title,
    ...(button.type === "web_url"
      ? {
          url: button.url,
          ...(button.webviewHeightRatio ? { webview_height_ratio: button.webviewHeightRatio } : {}),
          ...(button.messengerExtensions !== undefined
            ? { messenger_extensions: button.messengerExtensions }
            : {}),
        }
      : { payload: button.payload }),
  };
}

function genericElementBody(element: MessengerGenericTemplateElement): Record<string, unknown> {
  return {
    title: element.title,
    ...(element.imageUrl ? { image_url: element.imageUrl } : {}),
    ...(element.subtitle ? { subtitle: element.subtitle } : {}),
    ...(element.defaultAction ? { default_action: buttonBody(element.defaultAction) } : {}),
    ...(element.buttons ? { buttons: element.buttons.map(buttonBody) } : {}),
  };
}

function mediaElementBody(element: MessengerMediaTemplateElement): Record<string, unknown> {
  if (!element.url && !element.attachmentId) {
    throw new Error("Messenger media templates require url or attachmentId");
  }
  if (element.url && element.attachmentId) {
    throw new Error("Messenger media templates accept url or attachmentId, not both");
  }
  return {
    media_type: element.mediaType,
    ...(element.url ? { url: element.url } : { attachment_id: element.attachmentId }),
    ...(element.buttons ? { buttons: element.buttons.map(buttonBody) } : {}),
  };
}

function templateBody(template: MessengerTemplate): Record<string, unknown> {
  switch (template.type) {
    case "generic":
      if (template.elements.length < 1 || template.elements.length > 10) {
        throw new Error("Messenger generic templates require 1 to 10 elements");
      }
      return {
        type: "template",
        payload: {
          template_type: "generic",
          elements: template.elements.map(genericElementBody),
        },
      };
    case "button":
      if (template.buttons.length < 1 || template.buttons.length > 3) {
        throw new Error("Messenger button templates require 1 to 3 buttons");
      }
      return {
        type: "template",
        payload: {
          template_type: "button",
          text: template.text,
          buttons: template.buttons.map(buttonBody),
        },
      };
    case "list":
      if (template.elements.length < 2 || template.elements.length > 4) {
        throw new Error("Messenger list templates require 2 to 4 elements");
      }
      return {
        type: "template",
        payload: {
          template_type: "list",
          top_element_style: template.topElementStyle ?? "large",
          elements: template.elements.map(genericElementBody),
        },
      };
    case "media":
      return {
        type: "template",
        payload: { template_type: "media", elements: [mediaElementBody(template.element)] },
      };
  }
}

export function createMessaging(page: PageNode) {
  async function sendMessage(
    recipientPsid: string,
    message: Record<string, unknown>,
    options?: MessengerSendOptions,
  ): Promise<{ messageId: string; recipientId: string }> {
    const result = (await page.createMessage({
      recipient: { id: recipientPsid },
      messaging_type: options?.messagingType ?? "RESPONSE",
      ...(options?.tag ? { tag: options.tag } : {}),
      message,
    } as unknown as Parameters<PageNode["createMessage"]>[0])) as unknown as {
      message_id: string;
      recipient_id: string;
    };
    return { messageId: result.message_id, recipientId: result.recipient_id };
  }

  return {
    /** Send a Messenger DM. */
    async send(
      recipientPsid: string,
      message: {
        text?: string;
        attachmentUrl?: string;
        attachmentType?: string;
        attachment?: MessengerAttachment;
        quickReplies?: readonly MessengerQuickReply[];
      },
      options?: MessengerSendOptions,
    ): Promise<{ messageId: string; recipientId: string }> {
      const msgBody: Record<string, unknown> = {};
      if (message.text) {
        msgBody.text = message.text;
        if (message.quickReplies) {
          msgBody.quick_replies = message.quickReplies.map((reply) => ({
            content_type: reply.contentType,
            title: reply.title,
            payload: reply.payload,
            ...(reply.imageUrl ? { image_url: reply.imageUrl } : {}),
          }));
        }
      } else if (message.attachment) {
        msgBody.attachment = {
          type: message.attachment.type,
          payload: { url: message.attachment.url },
        };
      } else if (message.attachmentUrl) {
        msgBody.attachment = {
          type: message.attachmentType ?? "image",
          payload: { url: message.attachmentUrl },
        };
      }
      return sendMessage(recipientPsid, msgBody, options);
    },

    /** Send a text message with optional quick replies or message tag. */
    async sendText(
      recipientPsid: string,
      text: string,
      options?: MessengerSendOptions & { quickReplies?: readonly MessengerQuickReply[] },
    ) {
      const quickReplies = options?.quickReplies?.map((reply) => ({
        content_type: reply.contentType,
        title: reply.title,
        payload: reply.payload,
        ...(reply.imageUrl ? { image_url: reply.imageUrl } : {}),
      }));
      return sendMessage(
        recipientPsid,
        { text, ...(quickReplies ? { quick_replies: quickReplies } : {}) },
        options,
      );
    },

    /** Send a typed media attachment. */
    async sendAttachment(
      recipientPsid: string,
      attachment: MessengerAttachment,
      options?: MessengerSendOptions,
    ) {
      return sendMessage(
        recipientPsid,
        { attachment: { type: attachment.type, payload: { url: attachment.url } } },
        options,
      );
    },

    /** Send a provider-supported generic, button, list, or media template. */
    async sendTemplate(
      recipientPsid: string,
      template: MessengerTemplate,
      options?: MessengerSendOptions,
    ) {
      return sendMessage(recipientPsid, { attachment: templateBody(template) }, options);
    },

    /** Reply to a specific message in a conversation. */
    async reply(
      recipientPsid: string,
      replyToMid: string,
      text: string,
    ): Promise<{ messageId: string; recipientId: string }> {
      const result = await page.createMessage({
        recipient: { id: recipientPsid },
        messaging_type: "RESPONSE",
        message: { text },
        reply_to: { mid: replyToMid },
      });
      return { messageId: (result as any).message_id, recipientId: (result as any).recipient_id };
    },
  };
}
