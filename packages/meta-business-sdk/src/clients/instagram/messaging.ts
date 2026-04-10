type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;

export function createMessaging(api: CreateClientReturn, igAccountId: string) {
  return {
    /** Send a DM to an Instagram user. */
    async send(recipientId: string, message: { text?: string; attachmentUrl?: string }): Promise<{ messageId: string; recipientId: string }> {
      const body: Record<string, unknown> = {
        recipient: { id: recipientId },
      };
      if (message.text) {
        body.message = { text: message.text };
      } else if (message.attachmentUrl) {
        body.message = { attachment: { type: "image", payload: { url: message.attachmentUrl } } };
      }
      const result = await api.client.post<{ message_id: string; recipient_id: string }>(
        `${igAccountId}/messages`,
        body,
      );
      return { messageId: result.message_id, recipientId: result.recipient_id };
    },

    /** Reply to a specific DM message. */
    async reply(recipientId: string, replyToMid: string, text: string): Promise<{ messageId: string; recipientId: string }> {
      const result = await api.client.post<{ message_id: string; recipient_id: string }>(
        `${igAccountId}/messages`,
        {
          recipient: { id: recipientId },
          message: { text },
          reply_to: { mid: replyToMid },
        },
      );
      return { messageId: result.message_id, recipientId: result.recipient_id };
    },

    /** Send a private reply to a public comment (7-day window, max 1 per comment, 1000 chars). */
    async privateReply(commentId: string, text: string): Promise<{ messageId: string; recipientId: string }> {
      if (text.length > 1000) throw new Error("Private reply text cannot exceed 1000 characters");
      const result = await api.client.post<{ message_id: string; recipient_id: string }>(
        `${igAccountId}/messages`,
        {
          recipient: { comment_id: commentId },
          message: { text },
        },
      );
      return { messageId: result.message_id, recipientId: result.recipient_id };
    },
  };
}
