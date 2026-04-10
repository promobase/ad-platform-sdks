// Auto-generated types for Subscription — do not edit

export interface SubscriptionSubscribeParams {
  app_id: string;
  secret: string;
  subscribe_entity: string;
  callback_url: string;
  subscription_detail: {
  access_token: string;
  product_filters?: string[];
  lead_source?: string;
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
  subscribe_entity?: string;
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
  subscribe_entity?: string;
  callback_url?: string;
  subscription_detail?: {
  product_filters?: string[];
  bc_id?: string;
  advertiser_ids?: string[];
  notify_frequency?: string;
  lead_source?: string;
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

