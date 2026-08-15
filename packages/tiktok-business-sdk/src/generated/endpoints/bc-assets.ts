// @generated
// fingerprint: sha256:facc84aa16eb1e8192a9cb00ef83de380f4518ffbb5963f5f6e2df6e4ebf9c28
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Assets — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcAdvertiserCreateParams, BcAdvertiserCreateResponse, AdvertiserUpdateParams, AdvertiserUpdateResponse, BcAdvertiserDisableParams, BcAdvertiserDisableResponse, BcImageUploadParams, BcImageUploadResponse, BcAdvertiserQualificationGetParams, BcAdvertiserQualificationGetResponse, BcAdvertiserUnionpayInfoCheckParams, BcAdvertiserUnionpayInfoCheckResponse, BcAdvertiserUnionpayInfoSubmitParams, BcAdvertiserUnionpayInfoSubmitResponse, BcOaCreateParams, BcOaCreateResponse, BcAssetGetParams, BcAssetGetResponse, BcAssetAdminGetParams, BcAssetAdminGetResponse, BcAssetAssignParams, BcAssetAssignResponse, BcAssetUnassignParams, BcAssetUnassignResponse, BcAssetAccountAuthorizationParams, BcAssetAccountAuthorizationResponse, BcAssetAdvertiserAssignParams, BcAssetAdvertiserAssignResponse, BcAssetAdvertiserUnassignParams, BcAssetAdvertiserUnassignResponse, BcAssetAdvertiserAssignedParams, BcAssetAdvertiserAssignedResponse, BcPixelTransferParams, BcPixelTransferResponse, BcPixelLinkUpdateParams, BcPixelLinkUpdateResponse, BcPixelLinkGetParams, BcPixelLinkGetResponse, BcAssetPartnerGetParams, BcAssetPartnerGetResponse, BcAssetMemberGetParams, BcAssetMemberGetResponse, BcAssetAdminDeleteParams, BcAssetAdminDeleteResponse, AssetBindQuotaParams, AssetBindQuotaResponse } from "../types/bc-assets.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcAssets(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create an ad account */
    async createAdvertiser(params: BcAdvertiserCreateParams): Promise<BcAdvertiserCreateResponse> {
      return post<BcAdvertiserCreateResponse>("/open_api/v1.3/bc/advertiser/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an ad account */
    async updateAdvertiser(params: AdvertiserUpdateParams): Promise<AdvertiserUpdateResponse> {
      return post<AdvertiserUpdateResponse>("/open_api/v1.3/advertiser/update/", params as unknown as Record<string, unknown>);
    },

    /** Disable an ad account */
    async advertiserDisable(params: BcAdvertiserDisableParams): Promise<BcAdvertiserDisableResponse> {
      return post<BcAdvertiserDisableResponse>("/open_api/v1.3/bc/advertiser/disable/", params as unknown as Record<string, unknown>);
    },

    /** Upload a business certificate */
    async imageUpload(params: BcImageUploadParams): Promise<BcImageUploadResponse> {
      return post<BcImageUploadResponse>("/open_api/v1.3/bc/image/upload/", params as unknown as Record<string, unknown>);
    },

    /** Get qualifications within a Business Center */
    async getQualification(params: BcAdvertiserQualificationGetParams): Promise<BcAdvertiserQualificationGetResponse> {
      return get<BcAdvertiserQualificationGetResponse>("/open_api/v1.3/bc/advertiser/qualification/get/", params as unknown as Record<string, unknown>);
    },

    /** Check the UnionPay verification requirement for a business license */
    async unionpayInfoCheck(params: BcAdvertiserUnionpayInfoCheckParams): Promise<BcAdvertiserUnionpayInfoCheckResponse> {
      return get<BcAdvertiserUnionpayInfoCheckResponse>("/open_api/v1.3/bc/advertiser/unionpay_info/check/", params as unknown as Record<string, unknown>);
    },

    /** Submit UnionPay verification for a business license */
    async unionpayInfoSubmit(params: BcAdvertiserUnionpayInfoSubmitParams): Promise<BcAdvertiserUnionpayInfoSubmitResponse> {
      return post<BcAdvertiserUnionpayInfoSubmitResponse>("/open_api/v1.3/bc/advertiser/unionpay_info/submit/", params as unknown as Record<string, unknown>);
    },

    /** Create an Organization Account in a Business Center */
    async createOa(params: BcOaCreateParams): Promise<BcOaCreateResponse> {
      return post<BcOaCreateResponse>("/open_api/v1.3/bc/oa/create/", params as unknown as Record<string, unknown>);
    },

    /** Get assets */
    async getAsset(params: BcAssetGetParams): Promise<BcAssetGetResponse> {
      return get<BcAssetGetResponse>("/open_api/v1.3/bc/asset/get/", params as unknown as Record<string, unknown>);
    },

    /** Get assets as admin */
    async getAdmin(params: BcAssetAdminGetParams): Promise<BcAssetAdminGetResponse> {
      return get<BcAssetAdminGetResponse>("/open_api/v1.3/bc/asset/admin/get/", params as unknown as Record<string, unknown>);
    },

    /** Assign an asset */
    async assetAssign(params: BcAssetAssignParams): Promise<BcAssetAssignResponse> {
      return post<BcAssetAssignResponse>("/open_api/v1.3/bc/asset/assign/", params as unknown as Record<string, unknown>);
    },

    /** Unassign an asset */
    async assetUnassign(params: BcAssetUnassignParams): Promise<BcAssetUnassignResponse> {
      return post<BcAssetUnassignResponse>("/open_api/v1.3/bc/asset/unassign/", params as unknown as Record<string, unknown>);
    },

    /** Obtain a TikTok account ad delivery authorization URL */
    async accountAuthorization(params: BcAssetAccountAuthorizationParams): Promise<BcAssetAccountAuthorizationResponse> {
      return post<BcAssetAccountAuthorizationResponse>("/open_api/v1.3/bc/asset/account/authorization/", params as unknown as Record<string, unknown>);
    },

    /** Link a TikTok account to an ad account in Business Center */
    async advertiserAssign(params: BcAssetAdvertiserAssignParams): Promise<BcAssetAdvertiserAssignResponse> {
      return post<BcAssetAdvertiserAssignResponse>("/open_api/v1.3/bc/asset/advertiser/assign/", params as unknown as Record<string, unknown>);
    },

    /** Unlink a TikTok account from an ad account in Business Center */
    async advertiserUnassign(params: BcAssetAdvertiserUnassignParams): Promise<BcAssetAdvertiserUnassignResponse> {
      return post<BcAssetAdvertiserUnassignResponse>("/open_api/v1.3/bc/asset/advertiser/unassign/", params as unknown as Record<string, unknown>);
    },

    /** Get ad accounts linked to a TikTok account in Business Center */
    async advertiserAssigned(params: BcAssetAdvertiserAssignedParams): Promise<BcAssetAdvertiserAssignedResponse> {
      return get<BcAssetAdvertiserAssignedResponse>("/open_api/v1.3/bc/asset/advertiser/assigned/", params as unknown as Record<string, unknown>);
    },

    /** Transfer a pixel from advertiser to BC */
    async pixelTransfer(params: BcPixelTransferParams): Promise<BcPixelTransferResponse> {
      return post<BcPixelTransferResponse>("/open_api/v1.3/bc/pixel/transfer/", params as unknown as Record<string, unknown>);
    },

    /** Link a pixel to ad accounts / Unlink */
    async updateLink(params: BcPixelLinkUpdateParams): Promise<BcPixelLinkUpdateResponse> {
      return post<BcPixelLinkUpdateResponse>("/open_api/v1.3/bc/pixel/link/update/", params as unknown as Record<string, unknown>);
    },

    /** Get ad accounts linked to a pixel */
    async getLink(params: BcPixelLinkGetParams): Promise<BcPixelLinkGetResponse> {
      return get<BcPixelLinkGetResponse>("/open_api/v1.3/bc/pixel/link/get/", params as unknown as Record<string, unknown>);
    },

    /** Get partners by an asset */
    async getPartner(params: BcAssetPartnerGetParams): Promise<BcAssetPartnerGetResponse> {
      return get<BcAssetPartnerGetResponse>("/open_api/v1.3/bc/asset/partner/get/", params as unknown as Record<string, unknown>);
    },

    /** Get members by an asset */
    async getMember(params: BcAssetMemberGetParams): Promise<BcAssetMemberGetResponse> {
      return get<BcAssetMemberGetResponse>("/open_api/v1.3/bc/asset/member/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete assets from a BC */
    async deleteAdmin(params: BcAssetAdminDeleteParams): Promise<BcAssetAdminDeleteResponse> {
      return post<BcAssetAdminDeleteResponse>("/open_api/v1.3/bc/asset/admin/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get binding info of an asset */
    async bindQuota(params: AssetBindQuotaParams): Promise<AssetBindQuotaResponse> {
      return get<AssetBindQuotaResponse>("/open_api/v1.3/asset/bind/quota/", params as unknown as Record<string, unknown>);
    },
  };
}
