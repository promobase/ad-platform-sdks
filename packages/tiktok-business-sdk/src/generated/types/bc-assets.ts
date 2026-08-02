// Auto-generated types for BC Assets — do not edit

export interface BcAdvertiserCreateParams {
  bc_id: string;
  tied_to_billing_group?: boolean;
  advertiser_info: {
  name: string;
  currency: string;
  timezone: string;
  type?: "RESERVATION" | "AUCTION" | "DIRECT";
};
  customer_info: {
  company: string;
  industry: number;
  registered_area: string;
};
  qualification_info?: {
  promotion_link?: string;
  license_no?: string;
  license_image_id?: string;
  qualification_image_ids?: string[];
  qualification_id?: string;
};
  contact_info?: {
  name?: string;
  email?: string;
  number?: string;
};
  billing_info?: {
  address?: string;
  tax_field_dict?: Record<string, unknown>;
};
  billing_group_info?: {
  invoice_group_by: "ACCOUNT" | "ADVERTISER";
  billing_group_id?: string;
  invoice_payer?: "AGENCY" | "ADVERTISER" | "FR";
};
  payment_info?: {
  payment_portfolio_id?: string;
  budget_info?: {
  budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  budget?: number;
};
};
}


export interface BcAdvertiserCreateResponse {
  advertiser_id?: string;
  payment_portfolio_binding_result?: {
  status?: "SUCCESS" | "FAILED";
  error_msg?: string;
};
  budget_setup_result?: {
  status?: "SUCCESS" | "FAILED";
  error_msg?: string;
};
}


export interface AdvertiserUpdateParams {
  advertiser_id?: string;
  advertiser_name?: string;
  company?: string;
  contact_name?: string;
  contact_email?: string;
  contact_number?: string;
  promotion_link?: string;
  license_no?: string;
  license_image_id?: string;
  qualification_images?: {
  image_id?: string;
}[];
  address?: string;
  tax_map?: string;
  need_submit_certificate?: boolean;
  bc_id?: string;
  budget_update_type?: "UPDATE" | "RESET" | "CUSTOM_BUDGET" | "INCREMENTAL_UPDATE" | "ONE_CLICK_SET";
  request_id?: string;
  advertiser_budgets?: {
  advertiser_id?: string;
  budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  budget?: number;
}[];
}


export interface AdvertiserUpdateResponse {
  list?: {
  advertiser_id?: string;
  status?: "SUCCESS" | "FAILED";
  error_msg?: string;
  one_click_set_amount?: number;
}[];
}


export interface BcAdvertiserDisableParams {
  bc_id: string;
  advertiser_ids: string[];
}


export interface BcAdvertiserDisableResponse {
  disabled_advertiser_ids?: string[];
  failed_infos?: "DELIVERING" | "UNPAID_BILL" | "SUSPENDED" | "UNFINISHED_TRANSFER" | "AUTOPAY_UNBILLED";
}


export interface BcImageUploadParams {
  bc_id: string;
  image_file: File | Blob;
}


export interface BcImageUploadResponse {
  image_id?: string;
  image_url?: string;
}


export interface BcAdvertiserQualificationGetParams {
  bc_id: string;
  filtering?: {
  verified?: boolean;
};
  page?: number;
  page_size?: number;
}


export interface BcAdvertiserQualificationGetResponse {
  qualifications?: {
  qualification_id?: string;
  company_name?: string;
  status?: string;
  owner_advertiser_id?: string;
  linked_advertiser_count?: number;
  region_code?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcAdvertiserUnionpayInfoCheckParams {
  license_no: string;
}


export interface BcAdvertiserUnionpayInfoCheckResponse {
  unionpay_verification_required?: boolean;
}


export interface BcAdvertiserUnionpayInfoSubmitParams {
  bc_id: string;
  advertiser_id: string;
  representative_name: string;
  representative_document_type?: "ID_CARD" | "PASSPORT" | "HK_MACAO_EXIT_ENTRY_PERMIT" | "TAIWAN_MAINLAND_TRAVEL_PERMIT" | "HK_MACAO_MAINLAND_TRAVEL_PERMIT";
  representative_id: string;
  unionpay_account: string;
  representative_phone_number: string;
}


export interface BcAdvertiserUnionpayInfoSubmitResponse {}


export interface BcOaCreateParams {
  bc_id: string;
  display_name: string;
  handle?: string;
  profile_image?: File | Blob;
  operating_region_code: string;
  qualification_info?: {
  qualification_id?: string;
};
}


export interface BcOaCreateResponse {
  asset_id?: string;
  asset_name?: string;
}


export interface BcAssetGetParams {
  bc_id: string;
  asset_type: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "PIXEL" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  filtering?: {
  user_id?: string;
  user_email?: string;
  keyword?: string;
};
  page?: number;
  page_size?: number;
}


export interface BcAssetGetResponse {
  list?: {
  asset_type?: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "PIXEL" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id?: string;
  asset_name?: string;
  advertiser_account_type?: "RESERVATION" | "AUCTION";
  advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  catalog_role?: "ADMIN" | "AD_PROMOTE";
  ad_creation_eligible?: "NOT_AVAILABLE" | "AVAILABLE";
  store_role?: string;
  tt_account_roles?: ("POST" | "LIVE" | "DIRECT_MESSAGE")[];
  business_account_roles?: ("BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST")[];
  owner_bc_name?: string;
  is_business_verified?: boolean;
  operating_region_code?: string;
  tt_asset_handle?: string;
  tt_asset_profile_image?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcAssetAdminGetParams {
  bc_id: string;
  asset_type: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "PIXEL" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  filtering?: {
  advertiser_show_status?: string;
  relation_type?: "OWNER_BC" | "OWNER_PARTNER" | "OWNER_INDIVIDUAL";
  relation_status?: "BOUND" | "UNBOUND" | "PENDING" | "REJECTED";
};
  page?: number;
  page_size?: number;
}


export interface BcAssetAdminGetResponse {
  list?: {
  asset_type?: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "PIXEL" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id?: string;
  asset_name?: string;
  relation_type?: "OWNER_BC" | "OWNER_PARTNER" | "OWNER_INDIVIDUAL";
  relation_status?: "BOUND" | "UNBOUND" | "PENDING" | "REJECTED";
  advertiser_status?: string;
  advertiser_account_type?: "RESERVATION" | "AUCTION";
  advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  catalog_role?: "ADMIN" | "AD_PROMOTE";
  ad_creation_eligible?: "NOT_AVAILABLE" | "AVAILABLE";
  store_role?: string;
  pixel_code?: string;
  tt_account_roles?: ("POST" | "LIVE" | "DIRECT_MESSAGE")[];
  business_account_roles?: ("BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST")[];
  owner_bc_name?: string;
  is_business_verified?: boolean;
  operating_region_code?: string;
  tt_asset_handle?: string;
  tt_asset_profile_image?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcAssetAssignParams {
  bc_id: string;
  user_id: string;
  asset_type: "ADVERTISER" | "CATALOG" | "TIKTOK_SHOP" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id: string;
  advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  catalog_role?: "ADMIN" | "AD_PROMOTE";
  form_library_role?: string;
  tt_account_roles?: ("POST" | "LIVE" | "DIRECT_MESSAGE")[];
  business_account_roles?: ("BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST")[];
  store_role?: string;
}


export interface BcAssetAssignResponse {}


export interface BcAssetUnassignParams {
  bc_id: string;
  user_id: string;
  asset_type: "ADVERTISER" | "CATALOG" | "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id: string;
}


export interface BcAssetUnassignResponse {}


export interface BcAssetAccountAuthorizationParams {
  bc_id: string;
  is_ads_only_mode?: boolean;
}


export interface BcAssetAccountAuthorizationResponse {
  bc_auth_qr_code?: string;
}


export interface BcAssetAdvertiserAssignParams {
  bc_id: string;
  asset_type?: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id: string;
  advertiser_id: string;
}


export interface BcAssetAdvertiserAssignResponse {}


export interface BcAssetAdvertiserUnassignParams {
  bc_id: string;
  asset_id: string;
  asset_type: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  advertiser_id: string;
}


export interface BcAssetAdvertiserUnassignResponse {}


export interface BcAssetAdvertiserAssignedParams {
  bc_id: string;
  asset_id: string;
  asset_type: "TT_ACCOUNT" | "MANAGED_BUSINESS_ACCOUNT";
  page?: number;
  page_size?: number;
}


export interface BcAssetAdvertiserAssignedResponse {
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
}


export interface BcPixelTransferParams {
  bc_id: string;
  pixel_code: string;
}


export interface BcPixelTransferResponse {
  asset_id?: string;
}


export interface BcPixelLinkUpdateParams {
  bc_id: string;
  pixel_code: string;
  advertiser_ids: string[];
  relation_status: "LINK" | "UNLINK";
}


export interface BcPixelLinkUpdateResponse {}


export interface BcPixelLinkGetParams {
  bc_id: string;
  pixel_code: string;
}


export interface BcPixelLinkGetResponse {
  list?: {
  advertiser_id?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcAssetPartnerGetParams {
  bc_id: string;
  asset_type: "ADVERTISER" | "CATALOG";
  asset_id: string;
  filtering?: {
  keyword: string;
};
  page?: number;
  page_size?: number;
}


export interface BcAssetPartnerGetResponse {
  list?: {
  bc_name?: string;
  bc_id?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcAssetMemberGetParams {
  bc_id: string;
  asset_type: "ADVERTISER" | "CATALOG" | "LEAD" | "MANAGED_BUSINESS_ACCOUNT";
  asset_id: string;
  page?: number;
  page_size?: number;
  filtering?: {
  keyword?: string;
};
}


export interface BcAssetMemberGetResponse {
  list?: {
  user_id?: string;
  user_name?: string;
  user_email?: string;
  advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  catalog_role?: "ADMIN" | "AD_PROMOTE";
  business_account_roles?: ("BUSINESS_ACCOUNT_ADMIN" | "BUSINESS_ACCOUNT_OPERATOR" | "BUSINESS_ACCOUNT_ANALYST")[];
}[];
  page_info?: {
  total_number?: number;
  total_page?: number;
  page_size?: number;
  page?: number;
};
}


export interface BcAssetAdminDeleteParams {
  bc_id: string;
  asset_ids: string[];
  asset_type: "LEAD" | "TT_ACCOUNT" | "BC_AUTH_TT";
}


export interface BcAssetAdminDeleteResponse {}


export interface AssetBindQuotaParams {
  advertiser_id: string;
  asset_id: string;
  asset_type: string;
}


export interface AssetBindQuotaResponse {
  total_quota?: number;
  used_quota?: number;
  available_quota?: number;
}
