// @generated
// fingerprint: sha256:661515f7067ea44e3addd93b62de6eb53cdff7a136c4708c8d73d639f70ff69f
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Mentions — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BusinessMentionVideoListParams, BusinessMentionVideoListResponse, BusinessMentionVideoGetParams, BusinessMentionVideoGetResponse, BusinessMentionTopWordListParams, BusinessMentionTopWordListResponse, BusinessMentionTopHashtagListParams, BusinessMentionTopHashtagListResponse, BusinessMentionHashtagVideoListParams, BusinessMentionHashtagVideoListResponse, BusinessMentionHashtagVerifyListParams, BusinessMentionHashtagVerifyListResponse, BusinessMentionHashtagAddParams, BusinessMentionHashtagAddResponse, BusinessMentionHashtagManageListParams, BusinessMentionHashtagManageListResponse, BusinessMentionHashtagRemoveParams, BusinessMentionHashtagRemoveResponse, BusinessMentionCommentListParams, BusinessMentionCommentListResponse, BusinessMentionCommentGetParams, BusinessMentionCommentGetResponse, BusinessCommentReplyCreateParams, BusinessCommentReplyCreateResponse, BusinessWebhookUpdateParams, BusinessWebhookUpdateResponse, BusinessWebhookListParams, BusinessWebhookListResponse, BusinessWebhookDeleteParams, BusinessWebhookDeleteResponse } from "../types/mentions.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createMentions(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
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
