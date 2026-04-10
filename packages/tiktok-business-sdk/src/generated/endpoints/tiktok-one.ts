// Auto-generated client for TikTok One — do not edit
import type { TtUserOauth2RevokeParams, TtUserOauth2RevokeResponse, TtUserTokenInfoGetParams, TtUserTokenInfoGetResponse, TtoOauth2TcmParams, TtoOauth2TcmResponse, TtoTcmCreatorStatusGetParams, TtoTcmCreatorStatusGetResponse, TtoOauth2InfoParams, TtoOauth2InfoResponse, TtoTcmCreatorPublicParams, TtoTcmCreatorPublicResponse, TtoTcmCreatorPublicVideoListParams, TtoTcmCreatorPublicVideoListResponse, TtoCreatorAuthorizedParams, TtoCreatorAuthorizedResponse, TtoCreatorAuthorizedVideoListParams, TtoCreatorAuthorizedVideoListResponse, TtoTcmCategoryLabelParams, TtoTcmCategoryLabelResponse, TtoTcmRankParams, TtoTcmRankResponse, TtoTcmCreatorDiscoverParams, TtoTcmCreatorDiscoverResponse, TtoTcmBrandProfileCreateParams, TtoTcmBrandProfileCreateResponse, TtoTcmBrandProfileGetParams, TtoTcmBrandProfileGetResponse, TtoTcmCampaignCreateParams, TtoTcmCampaignCreateResponse, TtoTcmCampaignUpdateParams, TtoTcmCampaignUpdateResponse, TtoTcmCampaignParams, TtoTcmCampaignResponse, TtoTcmCampaignLinkParams, TtoTcmCampaignLinkResponse, TtoTcmCampaignLinkStatusParams, TtoTcmCampaignLinkStatusResponse, TtoTcmReportParams, TtoTcmReportResponse, TcmTtVideoStatusParams, TcmTtVideoStatusResponse, TtoTcmAnchorCreateParams, TtoTcmAnchorCreateResponse, TtoTcmAnchorGetParams, TtoTcmAnchorGetResponse, TtoTcmAnchorDeleteParams, TtoTcmAnchorDeleteResponse, TtoCreatorCampaignJoinParams, TtoCreatorCampaignJoinResponse, TtoCreatorCampaignVideoLinkParams, TtoCreatorCampaignVideoLinkResponse, TtoCreatorLinkRequestGetParams, TtoCreatorLinkRequestGetResponse, TtoCreatorLinkRequestConfirmParams, TtoCreatorLinkRequestConfirmResponse } from "../types/tiktok-one.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createTiktokOne(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get, renew or revoke a Creator access token */
    async oauth2Revoke(params: TtUserOauth2RevokeParams): Promise<TtUserOauth2RevokeResponse> {
      return post<TtUserOauth2RevokeResponse>("/open_api/v1.3/tt_user/oauth2/revoke/", params as unknown as Record<string, unknown>);
    },

    /** Obtain the authorized Creator permissions */
    async getTokenInfo(params: TtUserTokenInfoGetParams): Promise<TtUserTokenInfoGetResponse> {
      return post<TtUserTokenInfoGetResponse>("/open_api/v1.3/tt_user/token_info/get/", params as unknown as Record<string, unknown>);
    },

    /** Get authorized TTO Creator Marketplace accounts */
    async oauth2Tcm(params: TtoOauth2TcmParams): Promise<TtoOauth2TcmResponse> {
      return get<TtoOauth2TcmResponse>("/open_api/v1.3/tto/oauth2/tcm/", params as unknown as Record<string, unknown>);
    },

    /** Check TTO Creator Status */
    async getStatus(params: TtoTcmCreatorStatusGetParams): Promise<TtoTcmCreatorStatusGetResponse> {
      return get<TtoTcmCreatorStatusGetResponse>("/open_api/v1.3/tto/tcm/creator/status/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the details of a TTO Creator Marketplace account */
    async oauth2Info(params: TtoOauth2InfoParams): Promise<TtoOauth2InfoResponse> {
      return get<TtoOauth2InfoResponse>("/open_api/v1.3/tto/oauth2/info/", params as unknown as Record<string, unknown>);
    },

    /** Get TTO Public Account Insights */
    async creatorPublic(params: TtoTcmCreatorPublicParams): Promise<TtoTcmCreatorPublicResponse> {
      return get<TtoTcmCreatorPublicResponse>("/open_api/v1.3/tto/tcm/creator/public/", params as unknown as Record<string, unknown>);
    },

    /** Get TTO Public Media Insights */
    async listVideo(params: TtoTcmCreatorPublicVideoListParams): Promise<TtoTcmCreatorPublicVideoListResponse> {
      return get<TtoTcmCreatorPublicVideoListResponse>("/open_api/v1.3/tto/tcm/creator/public/video/list/", params as unknown as Record<string, unknown>);
    },

    /** Get Authorized TTO Creator Insights */
    async creatorAuthorized(params: TtoCreatorAuthorizedParams): Promise<TtoCreatorAuthorizedResponse> {
      return get<TtoCreatorAuthorizedResponse>("/open_api/v1.3/tto/creator/authorized/", params as unknown as Record<string, unknown>);
    },

    /** Get Authorized TTO Media Insights */
    async listVideo2(params: TtoCreatorAuthorizedVideoListParams): Promise<TtoCreatorAuthorizedVideoListResponse> {
      return get<TtoCreatorAuthorizedVideoListResponse>("/open_api/v1.3/tto/creator/authorized/video/list/", params as unknown as Record<string, unknown>);
    },

    /** Get TTO creator ranking or search labels */
    async categoryLabel(params: TtoTcmCategoryLabelParams): Promise<TtoTcmCategoryLabelResponse> {
      return get<TtoTcmCategoryLabelResponse>("/open_api/v1.3/tto/tcm/category/label/", params as unknown as Record<string, unknown>);
    },

    /** Get top TTO creator rankings */
    async tcmRank(params: TtoTcmRankParams): Promise<TtoTcmRankResponse> {
      return get<TtoTcmRankResponse>("/open_api/v1.3/tto/tcm/rank/", params as unknown as Record<string, unknown>);
    },

    /** Discover TTO creators */
    async creatorDiscover(params: TtoTcmCreatorDiscoverParams): Promise<TtoTcmCreatorDiscoverResponse> {
      return get<TtoTcmCreatorDiscoverResponse>("/open_api/v1.3/tto/tcm/creator/discover/", params as unknown as Record<string, unknown>);
    },

    /** Create a Brand Profile for your TTO account */
    async createProfile(params: TtoTcmBrandProfileCreateParams): Promise<TtoTcmBrandProfileCreateResponse> {
      return post<TtoTcmBrandProfileCreateResponse>("/open_api/v1.3/tto/tcm/brand/profile/create/", params as unknown as Record<string, unknown>);
    },

    /** Get the Brand Profiles for your TTO account */
    async getProfile(params: TtoTcmBrandProfileGetParams): Promise<TtoTcmBrandProfileGetResponse> {
      return get<TtoTcmBrandProfileGetResponse>("/open_api/v1.3/tto/tcm/brand/profile/get/", params as unknown as Record<string, unknown>);
    },

    /** Create or update a TTO Creator Marketplace campaign */
    async createCampaign(params: TtoTcmCampaignCreateParams): Promise<TtoTcmCampaignCreateResponse> {
      return post<TtoTcmCampaignCreateResponse>("/open_api/v1.3/tto/tcm/campaign/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a TTO Creator Marketplace campaign */
    async updateCampaign(params: TtoTcmCampaignUpdateParams): Promise<TtoTcmCampaignUpdateResponse> {
      return post<TtoTcmCampaignUpdateResponse>("/open_api/v1.3/tto/tcm/campaign/update/", params as unknown as Record<string, unknown>);
    },

    /** Get TTO Creator Marketplace campaigns */
    async tcmCampaign(params: TtoTcmCampaignParams): Promise<TtoTcmCampaignResponse> {
      return get<TtoTcmCampaignResponse>("/open_api/v1.3/tto/tcm/campaign/", params as unknown as Record<string, unknown>);
    },

    /** Send or revoke a TTO video linking request */
    async campaignLink(params: TtoTcmCampaignLinkParams): Promise<TtoTcmCampaignLinkResponse> {
      return post<TtoTcmCampaignLinkResponse>("/open_api/v1.3/tto/tcm/campaign/link/", params as unknown as Record<string, unknown>);
    },

    /** Get TTO video linking requests as a brand */
    async linkStatus(params: TtoTcmCampaignLinkStatusParams): Promise<TtoTcmCampaignLinkStatusResponse> {
      return get<TtoTcmCampaignLinkStatusResponse>("/open_api/v1.3/tto/tcm/campaign/link/status/", params as unknown as Record<string, unknown>);
    },

    /** Report on TTO Creator Marketplace videos */
    async tcmReport(params: TtoTcmReportParams): Promise<TtoTcmReportResponse> {
      return get<TtoTcmReportResponse>("/open_api/v1.3/tto/tcm/report/", params as unknown as Record<string, unknown>);
    },

    /** Get the authorization status */
    async ttVideoStatus(params: TcmTtVideoStatusParams): Promise<TcmTtVideoStatusResponse> {
      return get<TcmTtVideoStatusResponse>("/open_api/v1.3/tcm/tt_video/status/", params as unknown as Record<string, unknown>);
    },

    /** Create a webpage anchor */
    async createAnchor(params: TtoTcmAnchorCreateParams): Promise<TtoTcmAnchorCreateResponse> {
      return get<TtoTcmAnchorCreateResponse>("/open_api/v1.3/tto/tcm/anchor/create/", params as unknown as Record<string, unknown>);
    },

    /** Get webpage anchors */
    async getAnchor(params: TtoTcmAnchorGetParams): Promise<TtoTcmAnchorGetResponse> {
      return get<TtoTcmAnchorGetResponse>("/open_api/v1.3/tto/tcm/anchor/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete a draft anchor */
    async deleteAnchor(params: TtoTcmAnchorDeleteParams): Promise<TtoTcmAnchorDeleteResponse> {
      return post<TtoTcmAnchorDeleteResponse>("/open_api/v1.3/tto/tcm/anchor/delete/", params as unknown as Record<string, unknown>);
    },

    /** Join a TTO Creator Marketplace campaign as a creator */
    async campaignJoin(params: TtoCreatorCampaignJoinParams): Promise<TtoCreatorCampaignJoinResponse> {
      return post<TtoCreatorCampaignJoinResponse>("/open_api/v1.3/tto/creator/campaign/join/", params as unknown as Record<string, unknown>);
    },

    /** Link a video to a TTO Creator Marketplace campaign as a creator */
    async videoLink(params: TtoCreatorCampaignVideoLinkParams): Promise<TtoCreatorCampaignVideoLinkResponse> {
      return post<TtoCreatorCampaignVideoLinkResponse>("/open_api/v1.3/tto/creator/campaign/video/link/", params as unknown as Record<string, unknown>);
    },

    /** Get TTO video linking requests as a creator */
    async getRequest(params: TtoCreatorLinkRequestGetParams): Promise<TtoCreatorLinkRequestGetResponse> {
      return get<TtoCreatorLinkRequestGetResponse>("/open_api/v1.3/tto/creator/link/request/get/", params as unknown as Record<string, unknown>);
    },

    /** Approve or reject a TTO video linking request as a creator */
    async requestConfirm(params: TtoCreatorLinkRequestConfirmParams): Promise<TtoCreatorLinkRequestConfirmResponse> {
      return post<TtoCreatorLinkRequestConfirmResponse>("/open_api/v1.3/tto/creator/link/request/confirm/", params as unknown as Record<string, unknown>);
    },
  };
}
