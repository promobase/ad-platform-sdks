import type {
  TikTokClientOptions, TikTokResponse,
  SendMessageOptions, Conversation, ConversationType,
  MessageItem, MessageParticipant,
  CreateAutoMessageOptions, AutoMessage, AutoMessageType,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

/**
 * Business Messaging API — direct messages, conversations, and auto-messages.
 * Rate limit: 10 messages within 48h after receiving a user message.
 */
export function createMessaging(opts: TikTokClientOptions) {
  const { accessToken, businessId } = opts;

  async function get<T>(path: string, query: Record<string, unknown>): Promise<T> {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        params.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${params.toString()}`, {
      headers: { "Access-Token": accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    // -- Messages --

    /** Send a message to a conversation. */
    async sendMessage(opts: SendMessageOptions): Promise<{ messageId: string }> {
      const body: Record<string, unknown> = {
        business_id: businessId,
        message_type: opts.messageType,
      };

      if (opts.conversationId) {
        body.recipient_type = "CONVERSATION";
        body.recipient = opts.conversationId;
      }
      if (opts.text) body.text = opts.text;
      if (opts.image) body.image = opts.image;
      if (opts.sharePost) body.share_post = opts.sharePost;
      if (opts.template) body.template = opts.template;
      if (opts.senderAction) body.sender_action = opts.senderAction;
      if (opts.referencedMessageId) {
        body.referenced_message_info = { referenced_message_id: opts.referencedMessageId };
      }
      if (opts.directReply) {
        body.direct_reply = {
          reply_type: opts.directReply.replyType,
          comment_reply: { comment_id: opts.directReply.commentId },
        };
      }

      const data = await post<{ message: { message_id: string } }>("/business/message/send/", body);
      return { messageId: data.message.message_id };
    },

    /** List conversations. Only conversations from the past 90 days. */
    async listConversations(conversationType: ConversationType, opts?: { limit?: number; cursor?: number }): Promise<{ conversations: Conversation[]; cursor: number; has_more: boolean }> {
      const query: Record<string, unknown> = {
        business_id: businessId,
        conversation_type: conversationType,
      };
      if (opts?.limit !== undefined) query.limit = opts.limit;
      if (opts?.cursor !== undefined) query.cursor = opts.cursor;
      return get<{ conversations: Conversation[]; cursor: number; has_more: boolean }>("/business/message/conversation/list/", query);
    },

    /** List messages in a conversation. Returns max 20 most recent messages. */
    async listMessages(conversationId: string): Promise<{ messages: MessageItem[]; participants: MessageParticipant[] }> {
      return get<{ messages: MessageItem[]; participants: MessageParticipant[] }>("/business/message/content/list/", {
        business_id: businessId,
        conversation_id: conversationId,
      });
    },

    // -- Media --

    /** Upload an image for use in messages. JPG/PNG, max 3MB. Returns media_id valid for 30 days. */
    async uploadImage(imageFile: Blob): Promise<{ mediaId: string }> {
      const formData = new FormData();
      formData.append("business_id", businessId);
      formData.append("file", imageFile);
      formData.append("media_type", "IMAGE");

      const response = await fetch(`${TT_API_BASE}/business/message/media/upload/`, {
        method: "POST",
        headers: { "Access-Token": accessToken },
        body: formData,
      });
      const body = (await response.json()) as TikTokResponse<{ media_id: string }>;
      if (!response.ok || body.code !== 0) {
        throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
      }
      return { mediaId: body.data.media_id };
    },

    /** Download media from a message. Returns a URL valid for 24 hours. */
    async downloadMedia(opts: { conversationId: string; messageId: string; mediaId: string; mediaType: "IMAGE" | "VIDEO" }): Promise<{ downloadUrl: string }> {
      const data = await post<{ download_url: string }>("/business/message/media/download/", {
        business_id: businessId,
        conversation_id: opts.conversationId,
        message_id: opts.messageId,
        media_id: opts.mediaId,
        media_type: opts.mediaType,
      });
      return { downloadUrl: data.download_url };
    },

    /** Check messaging capabilities for a conversation. */
    async getCapabilities(capabilityTypes: string[], opts?: { conversationId?: string; conversationType?: ConversationType }): Promise<{ capabilityType: string; capabilityResult: boolean }[]> {
      const query: Record<string, unknown> = {
        business_id: businessId,
        capability_types: JSON.stringify(capabilityTypes),
      };
      if (opts?.conversationId) query.conversation_id = opts.conversationId;
      if (opts?.conversationType) query.conversation_type = opts.conversationType;
      const data = await get<{ capability_infos: { capability_type: string; capability_result: boolean }[] }>("/business/message/capabilities/get/", query);
      return (data.capability_infos ?? []).map(c => ({ capabilityType: c.capability_type, capabilityResult: c.capability_result }));
    },

    // -- Auto Messages --

    /** Create an auto-message (welcome message, suggested question, or chat prompt). */
    async createAutoMessage(opts: CreateAutoMessageOptions): Promise<{ autoMessageId: string }> {
      const body: Record<string, unknown> = {
        business_id: businessId,
        auto_message_type: opts.autoMessageType,
      };
      if (opts.welcomeMessage) body.welcome_message = opts.welcomeMessage;
      if (opts.suggestedQuestion) body.suggested_question = opts.suggestedQuestion;
      if (opts.chatPrompt) body.chat_prompt = opts.chatPrompt;
      const data = await post<{ auto_message: { auto_message_id: string } }>("/business/message/auto_message/create/", body);
      return { autoMessageId: data.auto_message.auto_message_id };
    },

    /** Update an existing auto-message. */
    async updateAutoMessage(autoMessageId: string, opts: CreateAutoMessageOptions): Promise<{ autoMessageId: string }> {
      const body: Record<string, unknown> = {
        business_id: businessId,
        auto_message_id: autoMessageId,
        auto_message_type: opts.autoMessageType,
      };
      if (opts.welcomeMessage) body.welcome_message = opts.welcomeMessage;
      if (opts.suggestedQuestion) body.suggested_question = opts.suggestedQuestion;
      if (opts.chatPrompt) body.chat_prompt = opts.chatPrompt;
      const data = await post<{ auto_message: { auto_message_id: string } }>("/business/message/auto_message/update/", body);
      return { autoMessageId: data.auto_message.auto_message_id };
    },

    /** Enable or disable an auto-message type. */
    async toggleAutoMessage(autoMessageType: AutoMessageType, status: "ENABLE" | "DISABLE"): Promise<void> {
      await post<Record<string, never>>("/business/message/auto_message/status/update/", {
        business_id: businessId,
        auto_message_type: autoMessageType,
        operation_status: status,
      });
    },

    /** Get auto-messages by type. Optionally filter by specific ID. */
    async getAutoMessages(autoMessageType: AutoMessageType, autoMessageId?: string): Promise<{ operationStatus: string; autoMessages: AutoMessage[] }> {
      const data = await post<{ operation_status: string; auto_messages: AutoMessage[] }>("/business/message/auto_message/get/", {
        business_id: businessId,
        auto_message_type: autoMessageType,
        ...(autoMessageId ? { auto_message_id: autoMessageId } : {}),
      });
      return { operationStatus: data.operation_status, autoMessages: data.auto_messages ?? [] };
    },

    /** Delete an auto-message. Only SUGGESTED_QUESTION and CHAT_PROMPT can be deleted. */
    async deleteAutoMessage(autoMessageType: "SUGGESTED_QUESTION" | "CHAT_PROMPT", autoMessageId: string): Promise<void> {
      await post<Record<string, never>>("/business/message/auto_message/delete/", {
        business_id: businessId,
        auto_message_type: autoMessageType,
        auto_message_id: autoMessageId,
      });
    },

    /** Sort chat prompts in display order. */
    async sortAutoMessages(autoMessageIds: string[]): Promise<void> {
      await post<Record<string, never>>("/business/message/auto_message/sort/", {
        business_id: businessId,
        auto_message_type: "CHAT_PROMPT",
        auto_message_ids: autoMessageIds,
      });
    },
  };
}
