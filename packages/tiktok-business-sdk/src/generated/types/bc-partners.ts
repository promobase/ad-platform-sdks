// Auto-generated types for BC Partners — do not edit

export interface BcPartnerGetParams {
  bc_id: string;
  page?: number;
  page_size?: number;
  filtering?: {
  name?: string;
};
}


export interface BcPartnerGetResponse {
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


export interface BcPartnerAddParams {
  bc_id: string;
  partner_id: string;
  asset_type?: string;
  asset_ids?: string[];
  advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
}


export interface BcPartnerAddResponse {}


export interface BcPartnerDeleteParams {
  bc_id: string;
  partner_id: string;
}


export interface BcPartnerDeleteResponse {}


export interface BcPartnerAssetDeleteParams {
  bc_id: string;
  partner_id: string;
  asset_type: "ADVERTISER" | "TT_ACCOUNT" | "BC_AUTH_TT" | "TIKTOK_SHOP" | "CATALOG" | "LEAD" | "PIXEL" | "STOREFRANT";
  asset_ids: string[];
}


export interface BcPartnerAssetDeleteResponse {}


export interface BcPartnerAssetGetParams {
  bc_id: string;
  partner_id: string;
  asset_type: "ADVERTISER" | "CATALOG";
  share_type: "SHARED" | "SHARING";
  filtering?: {
  keyword?: string;
};
  page?: number;
  page_size?: number;
}


export interface BcPartnerAssetGetResponse {
  list?: {
  asset_id?: string;
  asset_type?: "ADVERTISER" | "CATALOG";
  asset_name?: string;
  advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  advertiser_account_type?: "RESERVATION" | "AUCTION";
  catalog_role?: "ADMIN" | "AD_PROMOTE";
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
