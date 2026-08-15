import type { MessengerAttachment, MessengerQuickReply, MessengerSendOptions } from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type PageNode = ReturnType<CreateClientReturn["page"]>;

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
