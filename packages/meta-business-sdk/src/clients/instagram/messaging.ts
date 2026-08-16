import type {
  InstagramAttachment,
  InstagramGenericTemplateElement,
  InstagramMessageReaction,
  InstagramQuickReply,
  InstagramTemplate,
  InstagramTemplateButton,
} from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;

export function createMessaging(
  api: CreateClientReturn,
  igAccountId: string,
  options: { accessToken?: string; fetch?: typeof fetch } = {},
) {
  function validateQuickReplies(replies: readonly InstagramQuickReply[]) {
    if (replies.length > 13) throw new Error("Instagram supports at most 13 quick replies");
    if (replies.some((reply) => reply.title.length > 20)) {
      throw new Error("Instagram quick reply titles cannot exceed 20 characters");
    }
  }

  function quickRepliesBody(replies: readonly InstagramQuickReply[]) {
    validateQuickReplies(replies);
    return replies.map((reply) => ({
      content_type: reply.contentType,
      title: reply.title,
      payload: reply.payload,
    }));
  }

  function buttonBody(button: InstagramTemplateButton): Record<string, unknown> {
    return {
      type: button.type,
      title: button.title,
      ...(button.type === "web_url"
        ? {
            url: button.url,
            ...(button.webviewHeightRatio
              ? { webview_height_ratio: button.webviewHeightRatio }
              : {}),
          }
        : { payload: button.payload }),
    };
  }

  function genericElementBody(element: InstagramGenericTemplateElement): Record<string, unknown> {
    return {
      title: element.title,
      ...(element.imageUrl ? { image_url: element.imageUrl } : {}),
      ...(element.subtitle ? { subtitle: element.subtitle } : {}),
      ...(element.defaultAction ? { default_action: buttonBody(element.defaultAction) } : {}),
      ...(element.buttons ? { buttons: element.buttons.map(buttonBody) } : {}),
    };
  }

  function templateBody(template: InstagramTemplate): Record<string, unknown> {
    switch (template.type) {
      case "generic":
        if (template.elements.length < 1 || template.elements.length > 10) {
          throw new Error("Instagram generic templates require 1 to 10 elements");
        }
        return {
          attachment: {
            type: "template",
            payload: {
              template_type: "generic",
              elements: template.elements.map(genericElementBody),
            },
          },
        };
      case "button":
        if (template.buttons.length < 1 || template.buttons.length > 3) {
          throw new Error("Instagram button templates require 1 to 3 buttons");
        }
        return {
          attachment: {
            type: "template",
            payload: {
              template_type: "button",
              text: template.text,
              buttons: template.buttons.map(buttonBody),
            },
          },
        };
    }
  }

  async function sendMessage(
    recipient: Record<string, string>,
    message: Record<string, unknown>,
    replyToMid?: string,
    options?: { messagingType?: "RESPONSE" | "UPDATE" },
  ): Promise<{ messageId: string; recipientId: string }> {
    const result = await api.client.post<{ message_id: string; recipient_id: string }>(
      `${igAccountId}/messages`,
      {
        recipient,
        message,
        ...(options?.messagingType ? { messaging_type: options.messagingType } : {}),
        ...(replyToMid ? { reply_to: { mid: replyToMid } } : {}),
      },
    );
    return { messageId: result.message_id, recipientId: result.recipient_id };
  }

  function attachmentBody(attachment: InstagramAttachment): Record<string, unknown> {
    if (attachment.type === "MEDIA_SHARE") {
      return { attachment: { type: attachment.type, payload: { id: attachment.mediaId } } };
    }
    if ("attachmentId" in attachment) {
      return {
        attachment: { type: attachment.type, payload: { attachment_id: attachment.attachmentId } },
      };
    }
    return { attachment: { type: attachment.type, payload: { url: attachment.url } } };
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
          (body.message as Record<string, unknown>).quick_replies = quickRepliesBody(
            message.quickReplies,
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
      options?: { messagingType?: "RESPONSE" | "UPDATE" },
    ) {
      return sendMessage(
        { id: recipientId },
        {
          text,
          ...(quickReplies ? { quick_replies: quickRepliesBody(quickReplies) } : {}),
        },
        undefined,
        options,
      );
    },

    /** Send a typed image, video, audio, file, or published-media attachment. */
    async sendAttachment(recipientId: string, attachment: InstagramAttachment) {
      return sendMessage({ id: recipientId }, attachmentBody(attachment));
    },

    /** Send a provider-supported generic or button template. */
    async sendTemplate(
      recipientId: string,
      template: InstagramTemplate,
      options?: { messagingType?: "RESPONSE" | "UPDATE" },
    ) {
      return sendMessage({ id: recipientId }, templateBody(template), undefined, options);
    },

    /** React to an Instagram message with the provider-supported love reaction. */
    async react(
      recipientId: string,
      messageId: string,
      reaction: InstagramMessageReaction = "love",
    ) {
      const result = await api.client.post<{ message_id?: string; recipient_id: string }>(
        `${igAccountId}/messages`,
        {
          recipient: { id: recipientId },
          sender_action: "react",
          payload: { message_id: messageId, reaction },
        },
      );
      return { messageId: result.message_id, recipientId: result.recipient_id };
    },

    /** Remove the provider-supported love reaction from an Instagram message. */
    async unreact(
      recipientId: string,
      messageId: string,
      reaction: InstagramMessageReaction = "love",
    ) {
      const result = await api.client.post<{ message_id?: string; recipient_id: string }>(
        `${igAccountId}/messages`,
        {
          recipient: { id: recipientId },
          sender_action: "unreact",
          payload: { message_id: messageId, reaction },
        },
      );
      return { messageId: result.message_id, recipientId: result.recipient_id };
    },

    /** Reply to a specific DM message. */
    async reply(
      recipientId: string,
      replyToMid: string,
      text: string,
    ): Promise<{ messageId: string; recipientId: string }> {
      return sendMessage({ id: recipientId }, { text }, replyToMid);
    },

    /** Send an Instagram sender action (typing indicator). */
    async sendSenderAction(recipientId: string, action: "typing_on" | "typing_off"): Promise<void> {
      await api.client.post(`${igAccountId}/messages`, {
        recipient: { id: recipientId },
        sender_action: action,
      });
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

    /**
     * Upload reusable media for DM attachments. The graph client is
     * form-encoded, so multipart uploads use the injected fetch directly with
     * the access token in the query string.
     */
    async uploadAttachment(
      attachmentType: "image" | "video" | "audio" | "file",
      data: Blob,
      filename: string,
    ): Promise<{ attachmentId: string }> {
      const token = options.accessToken;
      if (!token) {
        throw new Error("Instagram accessToken is required for media uploads");
      }
      const formData = new FormData();
      formData.append(
        "message",
        JSON.stringify({ attachment: { type: attachmentType, payload: { is_reusable: true } } }),
      );
      formData.append("filedata", data, filename);
      const url = `https://graph.instagram.com/${igAccountId}/message_attachments?access_token=${encodeURIComponent(token)}`;
      const response = await (options.fetch ?? fetch)(url, {
        method: "POST",
        body: formData,
      });
      const body = (await response.json()) as {
        attachment_id?: string;
        error?: { message?: string };
      };
      if (!response.ok || !body.attachment_id) {
        throw new Error(
          body.error?.message ?? "Instagram Attachment Upload API did not return an attachment ID",
        );
      }
      return { attachmentId: body.attachment_id };
    },
  };
}
