// Auto-generated types for TikTok One — do not edit

export interface TtUserOauth2RevokeParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  auth_code: string;
  redirect_uri: string;
}


export interface TtUserOauth2RevokeResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  access_token?: string;
  token_type?: string;
  scope?: string;
  expires_in?: number;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  open_id?: string;
};
}


export interface TtUserTokenInfoGetParams {
  app_id: string;
  access_token: string;
}


export interface TtUserTokenInfoGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  app_id?: string;
  scope?: string;
  creator_id?: string;
};
}


export interface TtoOauth2TcmParams {}


export interface TtoOauth2TcmResponse {}


export interface TtoTcmCreatorStatusGetParams {
  tto_tcm_account_id: string;
  handle_names: string[];
}


export interface TtoTcmCreatorStatusGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  onboarding_status?: {
  handle_name?: string;
  status?: string;
}[];
};
}


export interface TtoOauth2InfoParams {}


export interface TtoOauth2InfoResponse {}


export interface TtoTcmCreatorPublicParams {}


export interface TtoTcmCreatorPublicResponse {}


export interface TtoTcmCreatorPublicVideoListParams {}


export interface TtoTcmCreatorPublicVideoListResponse {}


export interface TtoCreatorAuthorizedParams {}


export interface TtoCreatorAuthorizedResponse {}


export interface TtoCreatorAuthorizedVideoListParams {}


export interface TtoCreatorAuthorizedVideoListResponse {}


export interface TtoTcmCategoryLabelParams {}


export interface TtoTcmCategoryLabelResponse {}


export interface TtoTcmRankParams {}


export interface TtoTcmRankResponse {}


export interface TtoTcmCreatorDiscoverParams {}


export interface TtoTcmCreatorDiscoverResponse {}


export interface TtoTcmBrandProfileCreateParams {}


export interface TtoTcmBrandProfileCreateResponse {}


export interface TtoTcmBrandProfileGetParams {}


export interface TtoTcmBrandProfileGetResponse {}


export interface TtoTcmCampaignCreateParams {}


export interface TtoTcmCampaignCreateResponse {}


export interface TtoTcmCampaignUpdateParams {}


export interface TtoTcmCampaignUpdateResponse {}


export interface TtoTcmCampaignParams {}


export interface TtoTcmCampaignResponse {}


export interface TtoTcmCampaignLinkParams {}


export interface TtoTcmCampaignLinkResponse {}


export interface TtoTcmCampaignLinkStatusParams {}


export interface TtoTcmCampaignLinkStatusResponse {}


export interface TtoTcmReportParams {}


export interface TtoTcmReportResponse {}


export interface TcmTtVideoStatusParams {
  video_id: string;
  tcm_account_id: string;
}


export interface TcmTtVideoStatusResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  video_id?: string;
  auth_status?: string;
  auth_status_updated_time?: string;
  num_remaining_request?: number;
  requested_authorization_days?: number;
  auth_code?: string;
  auth_code_start_time?: string;
  auth_code_end_time?: string;
  auth_code_status?: string;
};
}


export interface TtoTcmAnchorCreateParams {}


export interface TtoTcmAnchorCreateResponse {}


export interface TtoTcmAnchorGetParams {}


export interface TtoTcmAnchorGetResponse {}


export interface TtoTcmAnchorDeleteParams {}


export interface TtoTcmAnchorDeleteResponse {}


export interface TtoCreatorCampaignJoinParams {}


export interface TtoCreatorCampaignJoinResponse {}


export interface TtoCreatorCampaignVideoLinkParams {}


export interface TtoCreatorCampaignVideoLinkResponse {}


export interface TtoCreatorLinkRequestGetParams {}


export interface TtoCreatorLinkRequestGetResponse {}


export interface TtoCreatorLinkRequestConfirmParams {}


export interface TtoCreatorLinkRequestConfirmResponse {}

