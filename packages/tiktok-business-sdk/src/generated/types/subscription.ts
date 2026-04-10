// Auto-generated types for Subscription — do not edit

export interface SubscriptionSubscribeParams {
  app_id: string;
  secret: string;
  subscribe_entity: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  callback_url: string;
  subscription_detail: {
  access_token: string;
  product_filters?: ("API_SERVICE_STATUS" | "BUSINESS_CENTER_API" | "CREATIVES_API" | "CATALOG_API" | "TIKTOK_STORE_API" | "CAMPAIGN_API" | "REPORTING_API" | "AUDIENCE_API" | "STREAMING_API" | "EVENTS_API" | "ACCOUNTS_API" | "MENTIONS_API" | "TIKTOK_ONE_API" | "DISCOVERY_API" | "SPARK_RECOMMEND_API" | "BUSINESS_MESSAGING_API")[];
  lead_source?: "LEAD" | "INSTANT_FORM" | "DIRECT_MESSAGE";
  bc_id?: "AD_ACCOUNT_SUSPENSION" | "ADMIN";
  advertiser_ids?: ("REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "ADVERTISER" | "ADMIN" | "OPERATOR" | "ANALYST")[];
  notify_frequency?: string;
  advertiser_id?: "AD_GROUP" | "AD" | "LEAD" | "CREATIVE_FATIGUE" | "INSTANT_FORM" | "DIRECT_MESSAGE" | "ADVERTISER" | "ADMIN";
  library_id?: "LEAD" | "INSTANT_FORM" | "DIRECT_MESSAGE";
  page_id?: "LEAD" | "INSTANT_FORM" | "DIRECT_MESSAGE" | "LEAD_GEN";
  adgroup_id?: "AD_GROUP" | "CREATIVE_FATIGUE";
  ad_id?: "AD" | "CREATIVE_FATIGUE";
  tto_tcm_account_id?: string;
};
}


export interface SubscriptionSubscribeResponse {
  code?: number;
  message?: string;
  data?: {
  subscription_id?: string;
};
  request_id?: string;
}


export interface SubscriptionGetParams {
  app_id: string;
  secret: string;
  subscribe_entity?: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  page?: number;
  page_size?: number;
}


export interface SubscriptionGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  subscriptions?: {
  app_id?: string;
  subscription_id?: string;
  subscribe_entity?: "REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION" | "LEAD" | "AD_GROUP" | "AD" | "TCM_VIDEOS" | "CREATIVE_FATIGUE" | "API_SERVICE_STATUS";
  callback_url?: string;
  subscription_detail?: {
  product_filters?: ("BUSINESS_CENTER_API" | "CREATIVES_API" | "CATALOG_API" | "TIKTOK_STORE_API" | "CAMPAIGN_API" | "REPORTING_API" | "AUDIENCE_API" | "STREAMING_API" | "EVENTS_API" | "ACCOUNTS_API" | "MENTIONS_API" | "TIKTOK_ONE_API" | "DISCOVERY_API" | "SPARK_RECOMMEND_API" | "BUSINESS_MESSAGING_API")[];
  bc_id?: string;
  advertiser_ids?: ("REPORT_DATA_CHANGE" | "AD_ACCOUNT_SUSPENSION")[];
  notify_frequency?: string;
  lead_source?: "LEAD" | "INSTANT_FORM" | "DIRECT_MESSAGE";
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
};
}


export interface SubscriptionUnsubscribeParams {
  app_id: string;
  secret: string;
  subscription_id: string;
}


export interface SubscriptionUnsubscribeResponse {
  code?: number;
  message?: string;
  data?: {
  subscription_id?: string;
};
  request_id?: string;
}

