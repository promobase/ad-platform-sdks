// Auto-generated types for Ad Accounts — do not edit

export interface Oauth2AdvertiserGetParams {
  app_id: string;
  secret: string;
}


export interface Oauth2AdvertiserGetResponse {
  code?: number;
  message?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  advertiser_name?: string;
};
};
  request_id?: string;
}


export interface AdvertiserInfoParams {
  advertiser_ids: string[];
  fields?: string[];
}


export interface AdvertiserInfoResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  advertiser_id?: string;
  can_use_custom_identity?: boolean;
  ads_only_mode?: boolean;
  owner_bc_id?: string;
  status?: string;
  role?: string;
  rejection_reason?: string;
  name?: string;
  timezone?: string;
  display_timezone?: string;
  company?: string;
  company_name_editable?: boolean;
  industry?: string;
  address?: string;
  country?: string;
  advertiser_account_type?: string;
  currency?: string;
  contacter?: string;
  email?: string;
  cellphone_number?: string;
  telephone_number?: string;
  language?: string;
  license_no?: string;
  license_url?: string;
  license_province?: string;
  license_city?: string;
  promotion_area?: string;
  promotion_center_province?: string;
  promotion_center_city?: string;
  brand?: string;
  description?: string;
  balance?: number;
  create_time?: string;
}[];
};
}

