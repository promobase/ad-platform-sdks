// Auto-generated client for Mentions — do not edit
import type { BusinessMentionVideoListParams, BusinessMentionVideoListResponse, BusinessMentionVideoGetParams, BusinessMentionVideoGetResponse, BusinessMentionTopWordListParams, BusinessMentionTopWordListResponse, BusinessMentionTopHashtagListParams, BusinessMentionTopHashtagListResponse, BusinessMentionHashtagVideoListParams, BusinessMentionHashtagVideoListResponse, BusinessMentionHashtagVerifyListParams, BusinessMentionHashtagVerifyListResponse, BusinessMentionHashtagAddParams, BusinessMentionHashtagAddResponse, BusinessMentionHashtagManageListParams, BusinessMentionHashtagManageListResponse, BusinessMentionHashtagRemoveParams, BusinessMentionHashtagRemoveResponse, BusinessMentionCommentListParams, BusinessMentionCommentListResponse, BusinessMentionCommentGetParams, BusinessMentionCommentGetResponse, BusinessCommentReplyCreateParams, BusinessCommentReplyCreateResponse, BusinessWebhookUpdateParams, BusinessWebhookUpdateResponse, BusinessWebhookListParams, BusinessWebhookListResponse, BusinessWebhookDeleteParams, BusinessWebhookDeleteResponse } from "../types/mentions.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createMentions(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get top 1000 mentioned posts */
    async listVideo(params: BusinessMentionVideoListParams): Promise<BusinessMentionVideoListResponse> {
      return get<BusinessMentionVideoListResponse>("/open_api/v1.3/business/mention/video/list/", params as unknown as Record<string, unknown>);
    },

    /** Get the details of a mentioned post from mentions webhook */
    async getVideo(params: BusinessMentionVideoGetParams): Promise<BusinessMentionVideoGetResponse> {
      return get<BusinessMentionVideoGetResponse>("/open_api/v1.3/business/mention/video/get/", params as unknown as Record<string, unknown>);
    },

    /** Get frequent keywords used in top 1000 mentioned posts */
    async listTopWord(params: BusinessMentionTopWordListParams): Promise<BusinessMentionTopWordListResponse> {
      return get<BusinessMentionTopWordListResponse>("/open_api/v1.3/business/mention/top_word/list/", params as unknown as Record<string, unknown>);
    },

    /** Get frequent hashtags used in top 1000 mentioned posts */
    async listTopHashtag(params: BusinessMentionTopHashtagListParams): Promise<BusinessMentionTopHashtagListResponse> {
      return get<BusinessMentionTopHashtagListResponse>("/open_api/v1.3/business/mention/top_hashtag/list/", params as unknown as Record<string, unknown>);
    },

    /** Get mention content for top 1000 brand hashtag posts */
    async listVideo2(params: BusinessMentionHashtagVideoListParams): Promise<BusinessMentionHashtagVideoListResponse> {
      return get<BusinessMentionHashtagVideoListResponse>("/open_api/v1.3/business/mention/hashtag/video/list/", params as unknown as Record<string, unknown>);
    },

    /** Get valid brand mention hashtags for a Business Account */
    async listVerify(params: BusinessMentionHashtagVerifyListParams): Promise<BusinessMentionHashtagVerifyListResponse> {
      return get<BusinessMentionHashtagVerifyListResponse>("/open_api/v1.3/business/mention/hashtag/verify/list/", params as unknown as Record<string, unknown>);
    },

    /** Enable brand hashtags for a Business Account */
    async hashtagAdd(params: BusinessMentionHashtagAddParams): Promise<BusinessMentionHashtagAddResponse> {
      return post<BusinessMentionHashtagAddResponse>("/open_api/v1.3/business/mention/hashtag/add/", params as unknown as Record<string, unknown>);
    },

    /** Get enabled hashtags for a Business Account */
    async listManage(params: BusinessMentionHashtagManageListParams): Promise<BusinessMentionHashtagManageListResponse> {
      return get<BusinessMentionHashtagManageListResponse>("/open_api/v1.3/business/mention/hashtag/manage/list/", params as unknown as Record<string, unknown>);
    },

    /** Delete an enabled brand hashtag for a Business Account */
    async hashtagRemove(params: BusinessMentionHashtagRemoveParams): Promise<BusinessMentionHashtagRemoveResponse> {
      return post<BusinessMentionHashtagRemoveResponse>("/open_api/v1.3/business/mention/hashtag/remove/", params as unknown as Record<string, unknown>);
    },

    /** Get top 1000 comment mentions on posts */
    async listComment(params: BusinessMentionCommentListParams): Promise<BusinessMentionCommentListResponse> {
      return get<BusinessMentionCommentListResponse>("/open_api/v1.3/business/mention/comment/list/", params as unknown as Record<string, unknown>);
    },

    /** Get the details of a comment mention from webhooks */
    async getComment(params: BusinessMentionCommentGetParams): Promise<BusinessMentionCommentGetResponse> {
      return get<BusinessMentionCommentGetResponse>("/open_api/v1.3/business/mention/comment/get/", params as unknown as Record<string, unknown>);
    },

    /** Reply to a mention in comments */
    async createReply(params: BusinessCommentReplyCreateParams): Promise<BusinessCommentReplyCreateResponse> {
      return post<BusinessCommentReplyCreateResponse>("/open_api/v1.3/business/comment/reply/create/", params as unknown as Record<string, unknown>);
    },

    /** Create a Mentions Webhook configuration */
    async updateWebhook(params: BusinessWebhookUpdateParams): Promise<BusinessWebhookUpdateResponse> {
      return post<BusinessWebhookUpdateResponse>("/open_api/v1.3/business/webhook/update/", params as unknown as Record<string, unknown>);
    },

    /** Get a Mentions Webhook configuration */
    async listWebhook(params: BusinessWebhookListParams): Promise<BusinessWebhookListResponse> {
      return get<BusinessWebhookListResponse>("/open_api/v1.3/business/webhook/list/", params as unknown as Record<string, unknown>);
    },

    /** Delete a Mentions Webhook configuration */
    async deleteWebhook(params: BusinessWebhookDeleteParams): Promise<BusinessWebhookDeleteResponse> {
      return post<BusinessWebhookDeleteResponse>("/open_api/v1.3/business/webhook/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
