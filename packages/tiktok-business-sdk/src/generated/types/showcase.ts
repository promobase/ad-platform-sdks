// @generated
// fingerprint: sha256:cddcd50f27b8c99d18808ae48f3b920799f12008dc79f0a4132e1fa1b8f73e6e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Showcase — do not edit

export interface ShowcaseIdentityGetParams {
  advertiser_id: string;
}


export interface ShowcaseIdentityGetResponse {
  identity_list?: {
  identity_id?: string;
  identity_type?: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
}[];
}


export interface ShowcaseRegionGetParams {
  advertiser_id: string;
  identity_id: string;
  identity_type: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
}


export interface ShowcaseRegionGetResponse {
  region_codes?: string[];
}


export interface ShowcaseProductGetParams {
  advertiser_id: string;
  identity_id: string;
  identity_type: "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  region_codes: string[];
  filtering?: {
  item_group_ids?: string[];
};
  page?: number;
  page_size?: number;
}


export interface ShowcaseProductGetResponse {
  showcase_products?: {
  item_group_id?: string;
  title?: string;
  product_image_url?: string;
  min_price?: string;
  max_price?: string;
  currency?: string;
  category?: string;
  status?: "AVAILABLE" | "NOT_AVAILABLE";
  catalog_id?: string;
  store_id?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
