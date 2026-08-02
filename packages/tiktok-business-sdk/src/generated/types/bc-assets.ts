// Auto-generated types for BC Assets — do not edit

export interface BcAdvertiserCreateParams {}


export interface BcAdvertiserCreateResponse {}


export interface AdvertiserUpdateParams {}


export interface AdvertiserUpdateResponse {}


export interface BcAdvertiserDisableParams {}


export interface BcAdvertiserDisableResponse {}


export interface BcImageUploadParams {}


export interface BcImageUploadResponse {}


export interface BcAdvertiserQualificationGetParams {}


export interface BcAdvertiserQualificationGetResponse {}


export interface BcAdvertiserUnionpayInfoCheckParams {}


export interface BcAdvertiserUnionpayInfoCheckResponse {}


export interface BcAdvertiserUnionpayInfoSubmitParams {}


export interface BcAdvertiserUnionpayInfoSubmitResponse {}


export interface BcOaCreateParams {
  bc_id: string;
  display_name: string;
  handle?: string;
  profile_image?: File | Blob;
  operating_region_code: string;
  qualification_info?: "AGENCY" | "SELF_SERVICE_AGENCY" | "DIRECT" | "SELF_SERVICE";
}


export interface BcOaCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  asset_id?: "MANAGED_BUSINESS_ACCOUNT" | "TT_ACCOUNT";
  asset_name?: string;
};
}


export interface BcAssetGetParams {}


export interface BcAssetGetResponse {}


export interface BcAssetAdminGetParams {}


export interface BcAssetAdminGetResponse {}


export interface BcAssetAssignParams {
  bc_id: string;
  user_id: string;
  asset_type: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "LEAD" | "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  advertiser_role?: "ADVERTISER" | "ADMIN" | "OPERATOR" | "ANALYST";
  catalog_role?: "CATALOG" | "ADMIN" | "AD_PROMOTE";
  form_library_role?: "LEAD" | "ADMIN";
  tt_account_roles?: ("TT_ACCOUNT" | "POST" | "LIVE" | "DIRECT_MESSAGE")[];
  business_account_roles?: ("MANAGED_BUSINESS_ACCOUNT" | "BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST")[];
  store_role?: "TIKTOK_SHOP" | "AD_PROMOTION";
}


export interface BcAssetAssignResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface BcAssetUnassignParams {
  bc_id: string;
  user_id: string;
  asset_type: "ADVERTISER" | "CATALOG" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id: "ADVERTISER" | "CATALOG" | "LEAD" | "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
}


export interface BcAssetUnassignResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface BcAssetAccountAuthorizationParams {
  bc_id: string;
  is_ads_only_mode?: "true" | "false";
}


export interface BcAssetAccountAuthorizationResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  bc_auth_qr_code?: string;
};
}


export interface BcAssetAdvertiserAssignParams {
  bc_id: string;
  asset_type?: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  advertiser_id: string;
}


export interface BcAssetAdvertiserAssignResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface BcAssetAdvertiserUnassignParams {
  bc_id: string;
  asset_id: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_type: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  advertiser_id: string;
}


export interface BcAssetAdvertiserUnassignResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface BcAssetAdvertiserAssignedParams {
  bc_id: string;
  asset_id: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_type: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  page?: number;
  page_size?: number;
}


export interface BcAssetAdvertiserAssignedResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  advertiser_name?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}


export interface BcPixelTransferParams {}


export interface BcPixelTransferResponse {}


export interface BcPixelLinkUpdateParams {}


export interface BcPixelLinkUpdateResponse {}


export interface BcPixelLinkGetParams {}


export interface BcPixelLinkGetResponse {}


export interface BcAssetPartnerGetParams {}


export interface BcAssetPartnerGetResponse {}


export interface BcAssetMemberGetParams {}


export interface BcAssetMemberGetResponse {}


export interface BcAssetAdminDeleteParams {}


export interface BcAssetAdminDeleteResponse {}


export interface AssetBindQuotaParams {}


export interface AssetBindQuotaResponse {}

