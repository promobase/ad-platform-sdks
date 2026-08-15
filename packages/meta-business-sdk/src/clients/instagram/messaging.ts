import type { InstagramAttachment, InstagramQuickReply } from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;

export function createMessaging(api: CreateClientReturn, igAccountId: string) {
  async function sendMessage(
    recipient: Record<string, string>,
    message: Record<string, unknown>,
    replyToMid?: string,
  ): Promise<{ messageId: string; recipientId: string }> {
    const result = await api.client.post<{ message_id: string; recipient_id: string }>(
      `${igAccountId}/messages`,
      {
        recipient,
        message,
        ...(replyToMid ? { reply_to: { mid: replyToMid } } : {}),
      },
    );
    return { messageId: result.message_id, recipientId: result.recipient_id };
  }

  function attachmentBody(attachment: InstagramAttachment): Record<string, unknown> {
    if (attachment.type === "MEDIA_SHARE") {
      return { attachment: { type: attachment.type, payload: { id: attachment.mediaId } } };
    }
    return { attachment: { type: attachment.type, payload: { url: attachment.url } } };
  }

  function quickRepliesBody(replies: readonly InstagramQuickReply[]) {
    return replies.map((reply) => ({
      content_type: reply.contentType,
      title: reply.title,
      payload: reply.payload,
    }));
  }

  return {
    /** Send a DM to an Instagram user. */
    async send(
      recipientId: string,
      message: {
        text?: string;
        attachmentUrl?: string;
        attachmentType?: string;
        attachment?: InstagramAttachment;
        quickReplies?: readonly InstagramQuickReply[];
      },
    ): Promise<{ messageId: string; recipientId: string }> {
      const body: Record<string, unknown> = {};
      if (message.text) {
        body.message = { text: message.text };
        if (message.quickReplies) {
          (body.message as Record<string, unknown>).quick_replies = message.quickReplies.map(
            (reply) => ({
              content_type: reply.contentType,
              title: reply.title,
              payload: reply.payload,
            }),
          );
        }
      } else if (message.attachment) {
        body.message = attachmentBody(message.attachment);
      } else if (message.attachmentUrl) {
        body.message = {
          attachment: {
            type: message.attachmentType ?? "image",
            payload: { url: message.attachmentUrl },
          },
        };
      }
      const result = await api.client.post<{ message_id: string; recipient_id: string }>(
        `${igAccountId}/messages`,
        { recipient: { id: recipientId }, ...body },
      );
      return { messageId: result.message_id, recipientId: result.recipient_id };
    },

    /** Send a typed text message with optional quick replies. */
    async sendText(
      recipientId: string,
      text: string,
      quickReplies?: readonly InstagramQuickReply[],
    ) {
      return sendMessage(
        { id: recipientId },
        {
          text,
          ...(quickReplies ? { quick_replies: quickRepliesBody(quickReplies) } : {}),
        },
      );
    },

    /** Send a typed image, video, audio, file, or published-media attachment. */
    async sendAttachment(recipientId: string, attachment: InstagramAttachment) {
      return sendMessage({ id: recipientId }, attachmentBody(attachment));
    },

    /** Reply to a specific DM message. */
    async reply(
      recipientId: string,
      replyToMid: string,
      text: string,
    ): Promise<{ messageId: string; recipientId: string }> {
      return sendMessage({ id: recipientId }, { text }, replyToMid);
    },

    /** Send a private reply to a public comment (7-day window, max 1 per comment, 1000 chars). */
    async privateReply(
      commentId: string,
      text: string,
    ): Promise<{ messageId: string; recipientId: string }> {
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
