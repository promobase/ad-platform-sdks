// @generated
// fingerprint: sha256:b815bca8d1717e567be0831e5dc04905ffc30f5cba59fe8add8db9278e9201f6
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for TikTok Store — do not edit

export interface StoreListParams {
  advertiser_id: string;
  store_id?: string;
  store_type?: string;
}


export interface StoreListResponse {
  stores?: {
  store_authorized_bc_id?: string;
  store_id?: string;
  store_type?: string;
  store_name?: string;
  store_code?: string;
  catalog_id?: string;
  targeting_region_codes?: string[];
}[];
}


export interface StoreProductGetParams {
  bc_id: string;
  store_id: string;
  filtering?: {
  item_group_ids?: string[];
  ad_creation_eligible?: "CUSTOM_SHOP_ADS" | "GMV_MAX";
  product_name?: string;
};
  advertiser_id?: string;
  sort_field?: string;
  sort_type?: "ASC" | "DESC";
  page?: number;
  page_size?: number;
}


export interface StoreProductGetResponse {
  store_products?: {
  store_id?: string;
  item_group_id?: string;
  catalog_id?: string;
  title?: string;
  product_image_url?: string;
  min_price?: string;
  max_price?: string;
  currency?: string;
  historical_sales?: number;
  category?: string;
  quantity?: number;
  status?: "AVAILABLE" | "NOT_AVAILABLE";
  gmv_max_ads_status?: "OCCUPIED" | "UNOCCUPIED" | "AVAILABLE";
  is_running_custom_shop_ads?: boolean;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
