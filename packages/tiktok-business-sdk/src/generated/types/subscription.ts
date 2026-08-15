// @generated
// fingerprint: sha256:8a89c13284d012cfe781bf40400f339f731508474247ecfd2a2074168891ce4a
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Subscription — do not edit

export interface SubscriptionSubscribeParams {
  app_id: string;
  secret: string;
  subscribe_entity: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  callback_url: string;
  subscription_detail: {
  access_token: string;
  product_filters?: ("BUSINESS_CENTER_API" | "CREATIVES_API" | "CATALOG_API" | "TIKTOK_STORE_API" | "CAMPAIGN_API" | "REPORTING_API" | "AUDIENCE_API" | "STREAMING_API" | "EVENTS_API" | "ACCOUNTS_API" | "MENTIONS_API" | "TIKTOK_ONE_API" | "DISCOVERY_API" | "SPARK_RECOMMEND_API" | "BUSINESS_MESSAGING_API")[];
  lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  bc_id?: string;
  advertiser_ids?: string[];
  notify_frequency?: string;
  advertiser_id?: string;
  library_id?: string;
  page_id?: string;
  adgroup_id?: string;
  ad_id?: string;
  tto_tcm_account_id?: string;
};
}


export interface SubscriptionSubscribeResponse {
  subscription_id?: string;
}


export interface SubscriptionGetParams {
  app_id: string;
  secret: string;
  subscribe_entity?: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  page?: number;
  page_size?: number;
}


export interface SubscriptionGetResponse {
  subscriptions?: {
  app_id?: string;
  subscription_id?: string;
  subscribe_entity?: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  callback_url?: string;
  subscription_detail?: {
  product_filters?: ("BUSINESS_CENTER_API" | "CREATIVES_API" | "CATALOG_API" | "TIKTOK_STORE_API" | "CAMPAIGN_API" | "REPORTING_API" | "AUDIENCE_API" | "STREAMING_API" | "EVENTS_API" | "ACCOUNTS_API" | "MENTIONS_API" | "TIKTOK_ONE_API" | "DISCOVERY_API" | "SPARK_RECOMMEND_API" | "BUSINESS_MESSAGING_API")[];
  bc_id?: string;
  advertiser_ids?: string[];
  notify_frequency?: string;
  lead_source?: "INSTANT_FORM" | "DIRECT_MESSAGE";
  advertiser_id?: string;
  page_id?: string;
  adgroup_id?: string;
  ad_id?: string;
  tto_tcm_account_id?: string;
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface SubscriptionUnsubscribeParams {
  app_id: string;
  secret: string;
  subscription_id: string;
}


export interface SubscriptionUnsubscribeResponse {
  subscription_id?: string;
}
