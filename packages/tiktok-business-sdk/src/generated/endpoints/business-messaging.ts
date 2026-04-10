// Auto-generated client for Business Messaging — do not edit
import type { BusinessMessageSendParams, BusinessMessageSendResponse, BusinessMessageConversationListParams, BusinessMessageConversationListResponse, BusinessMessageContentListParams, BusinessMessageContentListResponse, BusinessMessageMediaUploadParams, BusinessMessageMediaUploadResponse, BusinessMessageMediaDownloadParams, BusinessMessageMediaDownloadResponse, BusinessMessageCapabilitiesGetParams, BusinessMessageCapabilitiesGetResponse, BusinessMessageDirectReplyUpdateParams, BusinessMessageDirectReplyUpdateResponse, BusinessMessageDirectReplyGetParams, BusinessMessageDirectReplyGetResponse, BusinessWebhookUpdateParams, BusinessWebhookUpdateResponse, BusinessWebhookListParams, BusinessWebhookListResponse, BusinessWebhookDeleteParams, BusinessWebhookDeleteResponse, BusinessMessageAutoMessageCreateParams, BusinessMessageAutoMessageCreateResponse, BusinessMessageAutoMessageUpdateParams, BusinessMessageAutoMessageUpdateResponse, BusinessMessageAutoMessageStatusUpdateParams, BusinessMessageAutoMessageStatusUpdateResponse, BusinessMessageAutoMessageGetParams, BusinessMessageAutoMessageGetResponse, BusinessMessageAutoMessageDeleteParams, BusinessMessageAutoMessageDeleteResponse, BusinessMessageAutoMessageSortParams, BusinessMessageAutoMessageSortResponse } from "../types/business-messaging.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBusinessMessaging(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
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
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    /** Send a message to a conversation */
    async messageSend(params: BusinessMessageSendParams): Promise<BusinessMessageSendResponse> {
      return post<BusinessMessageSendResponse>("/open_api/v1.3/business/message/send/", params as unknown as Record<string, unknown>);
    },

    /** Get a list of conversations */
    async listConversation(params: BusinessMessageConversationListParams): Promise<BusinessMessageConversationListResponse> {
      return get<BusinessMessageConversationListResponse>("/open_api/v1.3/business/message/conversation/list/", params as unknown as Record<string, unknown>);
    },

    /** Get a list of messages */
    async listContent(params: BusinessMessageContentListParams): Promise<BusinessMessageContentListResponse> {
      return get<BusinessMessageContentListResponse>("/open_api/v1.3/business/message/content/list/", params as unknown as Record<string, unknown>);
    },

    /** Upload an image */
    async mediaUpload(params: BusinessMessageMediaUploadParams): Promise<BusinessMessageMediaUploadResponse> {
      return post<BusinessMessageMediaUploadResponse>("/open_api/v1.3/business/message/media/upload/", params as unknown as Record<string, unknown>);
    },

    /** Download an image or a video from a message */
    async mediaDownload(params: BusinessMessageMediaDownloadParams): Promise<BusinessMessageMediaDownloadResponse> {
      return post<BusinessMessageMediaDownloadResponse>("/open_api/v1.3/business/message/media/download/", params as unknown as Record<string, unknown>);
    },

    /** Check the capability of a Business Account for a conversation */
    async getCapabilities(params: BusinessMessageCapabilitiesGetParams): Promise<BusinessMessageCapabilitiesGetResponse> {
      return get<BusinessMessageCapabilitiesGetResponse>("/open_api/v1.3/business/message/capabilities/get/", params as unknown as Record<string, unknown>);
    },

    /** Enable or disable Comment-to-Message for a Business Account */
    async updateDirectReply(params: BusinessMessageDirectReplyUpdateParams): Promise<BusinessMessageDirectReplyUpdateResponse> {
      return post<BusinessMessageDirectReplyUpdateResponse>("/open_api/v1.3/business/message/direct_reply/update/", params as unknown as Record<string, unknown>);
    },

    /** Get the Comment-to-Message setting of a Business Account */
    async getDirectReply(params: BusinessMessageDirectReplyGetParams): Promise<BusinessMessageDirectReplyGetResponse> {
      return get<BusinessMessageDirectReplyGetResponse>("/open_api/v1.3/business/message/direct_reply/get/", params as unknown as Record<string, unknown>);
    },

    /** Create a Business Messaging Webhook configuration */
    async updateWebhook(params: BusinessWebhookUpdateParams): Promise<BusinessWebhookUpdateResponse> {
      return post<BusinessWebhookUpdateResponse>("/open_api/v1.3/business/webhook/update/", params as unknown as Record<string, unknown>);
    },

    /** Get a Business Messaging Webhook configuration */
    async listWebhook(params: BusinessWebhookListParams): Promise<BusinessWebhookListResponse> {
      return get<BusinessWebhookListResponse>("/open_api/v1.3/business/webhook/list/", params as unknown as Record<string, unknown>);
    },

    /**  Delete a Business Messaging Webhook configuration */
    async deleteWebhook(params: BusinessWebhookDeleteParams): Promise<BusinessWebhookDeleteResponse> {
      return post<BusinessWebhookDeleteResponse>("/open_api/v1.3/business/webhook/delete/", params as unknown as Record<string, unknown>);
    },

    /** Create an automatic message for a Business Account */
    async createAutoMessage(params: BusinessMessageAutoMessageCreateParams): Promise<BusinessMessageAutoMessageCreateResponse> {
      return post<BusinessMessageAutoMessageCreateResponse>("/open_api/v1.3/business/message/auto_message/create/", params as unknown as Record<string, unknown>);
    },

    /** Update the automatic message for a Business Account */
    async updateAutoMessage(params: BusinessMessageAutoMessageUpdateParams): Promise<BusinessMessageAutoMessageUpdateResponse> {
      return post<BusinessMessageAutoMessageUpdateResponse>("/open_api/v1.3/business/message/auto_message/update/", params as unknown as Record<string, unknown>);
    },

    /** Turn on or turn off an automatic message for a Business Account */
    async updateStatus(params: BusinessMessageAutoMessageStatusUpdateParams): Promise<BusinessMessageAutoMessageStatusUpdateResponse> {
      return post<BusinessMessageAutoMessageStatusUpdateResponse>("/open_api/v1.3/business/message/auto_message/status/update/", params as unknown as Record<string, unknown>);
    },

    /** Get the automatic messages for a Business Account */
    async getAutoMessage(params: BusinessMessageAutoMessageGetParams): Promise<BusinessMessageAutoMessageGetResponse> {
      return post<BusinessMessageAutoMessageGetResponse>("/open_api/v1.3/business/message/auto_message/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete the automatic message for a Business Account */
    async deleteAutoMessage(params: BusinessMessageAutoMessageDeleteParams): Promise<BusinessMessageAutoMessageDeleteResponse> {
      return post<BusinessMessageAutoMessageDeleteResponse>("/open_api/v1.3/business/message/auto_message/delete/", params as unknown as Record<string, unknown>);
    },

    /** Sort the automatic message for a Business Account */
    async autoMessageSort(params: BusinessMessageAutoMessageSortParams): Promise<BusinessMessageAutoMessageSortResponse> {
      return post<BusinessMessageAutoMessageSortResponse>("/open_api/v1.3/business/message/auto_message/sort/", params as unknown as Record<string, unknown>);
    },
  };
}
