// Auto-generated types for Page — do not edit

export interface PageGetParams {
  advertiser_id?: string;
  library_id?: string;
  page?: number;
  page_size?: number;
  status?: string;
  title?: string;
  update_time_range?: {
  start?: string;
  end?: string;
};
  business_type?: string;
  business_types?: string[];
}


export interface PageGetResponse {
  code?: number;
  message?: string;
  data?: {
  list?: {
  page_id?: string;
  status?: string;
  create_time?: string;
  update_time?: string;
  publish_time?: string;
  title?: string;
  preview_url?: string;
  thumbnail?: string;
  app_id?: string;
  has_cpp?: boolean;
  destination_urls?: string[];
  messaging_app_type?: string;
  messaging_app_account_id?: string;
  transfer_status?: string;
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

