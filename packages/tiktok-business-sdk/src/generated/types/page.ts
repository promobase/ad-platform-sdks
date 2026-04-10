// Auto-generated types for Page — do not edit

export interface PageGetParams {
  advertiser_id?: string;
  library_id?: string;
  page?: number;
  page_size?: number;
  status?: "EDITED" | "PUBLISHED";
  title?: string;
  update_time_range?: {
  start?: string;
  end?: string;
};
  business_type?: "LEAD_GEN" | "STORE_FRONT" | "APP_PROFILE_PAGE" | "TIKTOK_INSTANT_PAGE" | "SHOP_ADS_PLP" | "SHOP_ADS_PDP" | "POP_UP_FORM";
  business_types?: ("LEAD_GEN" | "STORE_FRONT" | "APP_PROFILE_PAGE" | "TIKTOK_INSTANT_PAGE" | "SHOP_ADS_PLP" | "SHOP_ADS_PDP" | "POP_UP_FORM")[];
}


export interface PageGetResponse {
  code?: number;
  message?: string;
  data?: {
  list?: {
  page_id?: string;
  status?: "EDITED" | "PUBLISHED";
  create_time?: string;
  update_time?: string;
  publish_time?: string;
  title?: string;
  preview_url?: string;
  thumbnail?: string;
  app_id?: string;
  has_cpp?: "TIKTOK_INSTANT_PAGE" | "true" | "false";
  destination_urls?: ("LEAD_GEN" | "APP_PROFILE_PAGE" | "TIKTOK_INSTANT_PAGE")[];
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "IM_URL";
  messaging_app_account_id?: "MESSENGER" | "WHATSAPP" | "IM_URL";
  transfer_status?: "UNSET" | "TRANSFERRED";
  template_id?: string;
  user_id?: string;
  is_associated?: boolean;
  duplicate_id?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
  request_id?: string;
}


export interface Oauth2AccessTokenTipSdkCreateParams {}


export interface Oauth2AccessTokenTipSdkCreateResponse {}


export interface Oauth2AccessTokenTipSdkValidateParams {}


export interface Oauth2AccessTokenTipSdkValidateResponse {}


export interface Oauth2AccessTokenTipSdkRenewParams {}


export interface Oauth2AccessTokenTipSdkRenewResponse {}

