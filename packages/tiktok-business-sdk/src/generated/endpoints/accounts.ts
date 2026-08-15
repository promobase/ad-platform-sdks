// @generated
// fingerprint: sha256:b6603fcd40584004c5b903d2107fe92825eefdb4ab12956f598105197fbc0c15
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Accounts — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { TtUserTokenInfoGetParams, TtUserTokenInfoGetResponse, BusinessGetParams, BusinessGetResponse, BusinessVideoListParams, BusinessVideoListResponse, BusinessBenchmarkParams, BusinessBenchmarkResponse, BusinessVideoSettingsParams, BusinessVideoSettingsResponse, BusinessCommentListParams, BusinessCommentListResponse, BusinessCommentReplyListParams, BusinessCommentReplyListResponse, BusinessCommentCreateParams, BusinessCommentCreateResponse, BusinessCommentImageUploadParams, BusinessCommentImageUploadResponse, BusinessCommentReplyCreateParams, BusinessCommentReplyCreateResponse, BusinessCommentLikeParams, BusinessCommentLikeResponse, BusinessCommentHideParams, BusinessCommentHideResponse, BusinessCommentDeleteParams, BusinessCommentDeleteResponse, BusinessVideoPublishParams, BusinessVideoPublishResponse, BusinessPhotoPublishParams, BusinessPhotoPublishResponse, BusinessPublishStatusParams, BusinessPublishStatusResponse, BusinessHashtagSuggestionParams, BusinessHashtagSuggestionResponse, BusinessPublishLocationParams, BusinessPublishLocationResponse, BusinessPostAuthorizeSettingParams, BusinessPostAuthorizeSettingResponse, BusinessPostAuthorizeParams, BusinessPostAuthorizeResponse, BusinessPostAuthorizeStatusParams, BusinessPostAuthorizeStatusResponse, BusinessPostAuthorizeDeleteParams, BusinessPostAuthorizeDeleteResponse, BusinessPropertyAddParams, BusinessPropertyAddResponse, BusinessPropertyVerifyParams, BusinessPropertyVerifyResponse, BusinessPropertyDeleteParams, BusinessPropertyDeleteResponse, BusinessPropertyListParams, BusinessPropertyListResponse, BusinessWebhookUpdateParams, BusinessWebhookUpdateResponse, BusinessWebhookListParams, BusinessWebhookListResponse, BusinessWebhookDeleteParams, BusinessWebhookDeleteResponse } from "../types/accounts.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAccounts(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get the authorized TikTok account permission scopes via access token */
    async getTokenInfo(params: TtUserTokenInfoGetParams): Promise<TtUserTokenInfoGetResponse> {
      return post<TtUserTokenInfoGetResponse>("/open_api/v1.3/tt_user/token_info/get/", params as unknown as Record<string, unknown>);
    },

    /** Get profile data of a TikTok account */
    async getBusiness(params: BusinessGetParams): Promise<BusinessGetResponse> {
      return get<BusinessGetResponse>("/open_api/v1.3/business/get/", params as unknown as Record<string, unknown>);
    },

    /** Get post data of a TikTok account */
    async listVideo(params: BusinessVideoListParams): Promise<BusinessVideoListResponse> {
      return get<BusinessVideoListResponse>("/open_api/v1.3/business/video/list/", params as unknown as Record<string, unknown>);
    },

    /** Get benchmarks for a business category */
    async businessBenchmark(params: BusinessBenchmarkParams): Promise<BusinessBenchmarkResponse> {
      return get<BusinessBenchmarkResponse>("/open_api/v1.3/business/benchmark/", params as unknown as Record<string, unknown>);
    },

    /** Get the post privacy settings of a TikTok account */
    async videoSettings(params: BusinessVideoSettingsParams): Promise<BusinessVideoSettingsResponse> {
      return get<BusinessVideoSettingsResponse>("/open_api/v1.3/business/video/settings/", params as unknown as Record<string, unknown>);
    },

    /** Get comments on an owned video */
    async listComment(params: BusinessCommentListParams): Promise<BusinessCommentListResponse> {
      return get<BusinessCommentListResponse>("/open_api/v1.3/business/comment/list/", params as unknown as Record<string, unknown>);
    },

    /** Get all replies to a comment */
    async listReply(params: BusinessCommentReplyListParams): Promise<BusinessCommentReplyListResponse> {
      return get<BusinessCommentReplyListResponse>("/open_api/v1.3/business/comment/reply/list/", params as unknown as Record<string, unknown>);
    },

    /** Create a new comment on an owned video */
    async createComment(params: BusinessCommentCreateParams): Promise<BusinessCommentCreateResponse> {
      return post<BusinessCommentCreateResponse>("/open_api/v1.3/business/comment/create/", params as unknown as Record<string, unknown>);
    },

    /** Upload a comment image */
    async imageUpload(params: BusinessCommentImageUploadParams): Promise<BusinessCommentImageUploadResponse> {
      return post<BusinessCommentImageUploadResponse>("/open_api/v1.3/business/comment/image/upload/", params as unknown as Record<string, unknown>);
    },

    /** Reply to an existing comment on an owned video */
    async createReply(params: BusinessCommentReplyCreateParams): Promise<BusinessCommentReplyCreateResponse> {
      return post<BusinessCommentReplyCreateResponse>("/open_api/v1.3/business/comment/reply/create/", params as unknown as Record<string, unknown>);
    },

    /** Like/unlike an existing comment on an owned video */
    async commentLike(params: BusinessCommentLikeParams): Promise<BusinessCommentLikeResponse> {
      return post<BusinessCommentLikeResponse>("/open_api/v1.3/business/comment/like/", params as unknown as Record<string, unknown>);
    },

    /** Hide/unhide an existing comment on an owned video */
    async commentHide(params: BusinessCommentHideParams): Promise<BusinessCommentHideResponse> {
      return post<BusinessCommentHideResponse>("/open_api/v1.3/business/comment/hide/", params as unknown as Record<string, unknown>);
    },

    /** Delete an existing comment on an owned video */
    async deleteComment(params: BusinessCommentDeleteParams): Promise<BusinessCommentDeleteResponse> {
      return post<BusinessCommentDeleteResponse>("/open_api/v1.3/business/comment/delete/", params as unknown as Record<string, unknown>);
    },

    /** Publish a public video post to an owned account */
    async videoPublish(params: BusinessVideoPublishParams): Promise<BusinessVideoPublishResponse> {
      return post<BusinessVideoPublishResponse>("/open_api/v1.3/business/video/publish/", params as unknown as Record<string, unknown>);
    },

    /** Publish a photo post to an owned account */
    async photoPublish(params: BusinessPhotoPublishParams): Promise<BusinessPhotoPublishResponse> {
      return post<BusinessPhotoPublishResponse>("/open_api/v1.3/business/photo/publish/", params as unknown as Record<string, unknown>);
    },

    /** Get the publishing status of a TikTok post */
    async publishStatus(params: BusinessPublishStatusParams): Promise<BusinessPublishStatusResponse> {
      return get<BusinessPublishStatusResponse>("/open_api/v1.3/business/publish/status/", params as unknown as Record<string, unknown>);
    },

    /** Get recommended hashtags for TikTok accounts */
    async hashtagSuggestion(params: BusinessHashtagSuggestionParams): Promise<BusinessHashtagSuggestionResponse> {
      return get<BusinessHashtagSuggestionResponse>("/open_api/v1.3/business/hashtag/suggestion/", params as unknown as Record<string, unknown>);
    },

    /** Get the location tags for a TikTok account */
    async publishLocation(params: BusinessPublishLocationParams): Promise<BusinessPublishLocationResponse> {
      return get<BusinessPublishLocationResponse>("/open_api/v1.3/business/publish/location/", params as unknown as Record<string, unknown>);
    },

    /** Enable or disable the ad authorization setting for a TikTok post */
    async authorizeSetting(params: BusinessPostAuthorizeSettingParams): Promise<BusinessPostAuthorizeSettingResponse> {
      return post<BusinessPostAuthorizeSettingResponse>("/open_api/v1.3/business/post/authorize/setting/", params as unknown as Record<string, unknown>);
    },

    /** Extend the authorization validity period of a TikTok post */
    async postAuthorize(params: BusinessPostAuthorizeParams): Promise<BusinessPostAuthorizeResponse> {
      return post<BusinessPostAuthorizeResponse>("/open_api/v1.3/business/post/authorize/", params as unknown as Record<string, unknown>);
    },

    /** Get the authorization status of a TikTok post */
    async authorizeStatus(params: BusinessPostAuthorizeStatusParams): Promise<BusinessPostAuthorizeStatusResponse> {
      return get<BusinessPostAuthorizeStatusResponse>("/open_api/v1.3/business/post/authorize/status/", params as unknown as Record<string, unknown>);
    },

    /** Delete the authorization code of a TikTok post */
    async deleteAuthorize(params: BusinessPostAuthorizeDeleteParams): Promise<BusinessPostAuthorizeDeleteResponse> {
      return post<BusinessPostAuthorizeDeleteResponse>("/open_api/v1.3/business/post/authorize/delete/", params as unknown as Record<string, unknown>);
    },

    /** Add a URL property to an ad account */
    async propertyAdd(params: BusinessPropertyAddParams): Promise<BusinessPropertyAddResponse> {
      return post<BusinessPropertyAddResponse>("/open_api/v1.3/business/property/add/", params as unknown as Record<string, unknown>);
    },

    /** Check the URL property verification result */
    async propertyVerify(params: BusinessPropertyVerifyParams): Promise<BusinessPropertyVerifyResponse> {
      return post<BusinessPropertyVerifyResponse>("/open_api/v1.3/business/property/verify/", params as unknown as Record<string, unknown>);
    },

    /** Delete the verified ownership of a URL property */
    async deleteProperty(params: BusinessPropertyDeleteParams): Promise<BusinessPropertyDeleteResponse> {
      return post<BusinessPropertyDeleteResponse>("/open_api/v1.3/business/property/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get the list of added URL properties under an ad account */
    async listProperty(params: BusinessPropertyListParams): Promise<BusinessPropertyListResponse> {
      return get<BusinessPropertyListResponse>("/open_api/v1.3/business/property/list/", params as unknown as Record<string, unknown>);
    },

    /** Create or update a TikTok account Webhook configuration */
    async updateWebhook(params: BusinessWebhookUpdateParams): Promise<BusinessWebhookUpdateResponse> {
      return post<BusinessWebhookUpdateResponse>("/open_api/v1.3/business/webhook/update/", params as unknown as Record<string, unknown>);
    },

    /** Get TikTok account Webhook configurations */
    async listWebhook(params: BusinessWebhookListParams): Promise<BusinessWebhookListResponse> {
      return get<BusinessWebhookListResponse>("/open_api/v1.3/business/webhook/list/", params as unknown as Record<string, unknown>);
    },

    /** Delete a TikTok account Webhook configuration */
    async deleteWebhook(params: BusinessWebhookDeleteParams): Promise<BusinessWebhookDeleteResponse> {
      return post<BusinessWebhookDeleteResponse>("/open_api/v1.3/business/webhook/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
