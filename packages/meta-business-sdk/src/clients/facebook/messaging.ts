type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type PageNode = ReturnType<CreateClientReturn["page"]>;

export function createMessaging(page: PageNode) {
  return {
    /** Send a Messenger DM. */
    async send(
      recipientPsid: string,
      message: { text?: string; attachmentUrl?: string; attachmentType?: string },
    ): Promise<{ messageId: string; recipientId: string }> {
      const msgBody: Record<string, unknown> = {};
      if (message.text) {
        msgBody.text = message.text;
      } else if (message.attachmentUrl) {
        msgBody.attachment = {
          type: message.attachmentType ?? "image",
          payload: { url: message.attachmentUrl },
        };
      }
      const result = await page.createMessage({
        recipient: { id: recipientPsid },
        messaging_type: "RESPONSE",
        message: msgBody,
      });
      return { messageId: (result as any).message_id, recipientId: (result as any).recipient_id };
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
