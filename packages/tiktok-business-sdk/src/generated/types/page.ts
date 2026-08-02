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
  list?: {
  page_id?: string;
  status?: "EDITED" | "PUBLISHED";
  title?: string;
  preview_url?: string;
  template_id?: string;
  template_name?: string;
  supported_objectives?: ("APP_PROMOTION" | "WEB_CONVERSIONS" | "LEAD_GENERATION" | "TRAFFIC" | "REACH" | "VIDEO_VIEWS" | "ENGAGEMENT" | "PRODUCT_SALES" | "RF_REACH")[];
  thumbnail?: string;
  create_time?: string;
  update_time?: string;
  publish_time?: string;
  app_id?: string;
  has_cpp?: boolean;
  destination_urls?: string[];
  messaging_app_type?: "MESSENGER" | "WHATSAPP" | "IM_URL";
  messaging_app_account_id?: string;
  transfer_status?: "UNSET" | "TRANSFERRED";
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
}


export interface Oauth2AccessTokenTipSdkCreateParams {
  advertiser_id: string;
}


export interface Oauth2AccessTokenTipSdkCreateResponse {
  tip_sdk_access_token?: string;
}


export interface Oauth2AccessTokenTipSdkValidateParams {
  advertiser_id: string;
  tip_sdk_access_token: string;
}


export interface Oauth2AccessTokenTipSdkValidateResponse {
  is_valid?: boolean;
}


export interface Oauth2AccessTokenTipSdkRenewParams {
  advertiser_id: string;
  tip_sdk_access_token: string;
}


export interface Oauth2AccessTokenTipSdkRenewResponse {}
