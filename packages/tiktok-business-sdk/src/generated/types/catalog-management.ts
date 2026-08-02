// Auto-generated types for Catalog Management — do not edit

export interface CatalogCreateParams {
  bc_id: string;
  name: string;
  catalog_type: "ECOM" | "HOTEL" | "FLIGHT" | "DESTINATION" | "ENTERTAINMENT" | "AUTO_VEHICLE" | "AUTO_MODEL" | "MINI_SERIES";
  catalog_conf: {
  region_code: string;
  currency: string;
  channel?: "PARTNER" | "CLIENT";
  additional_config_list?: {
  region_code?: string;
  currency?: string;
}[];
};
}


export interface CatalogCreateResponse {}


export interface CatalogUpdateParams {
  bc_id: string;
  catalog_id: string;
  name: string;
}


export interface CatalogUpdateResponse {}


export interface CatalogDeleteParams {
  bc_id: string;
  catalog_id: string;
}


export interface CatalogDeleteResponse {}


export interface CatalogGetParams {
  bc_id: string;
  catalog_id?: string;
  page?: number;
  page_size?: number;
}


export interface CatalogGetResponse {
  list?: {
  catalog_id?: string;
  catalog_name?: string;
  catalog_type?: "ECOM" | "HOTEL" | "FLIGHT" | "DESTINATION" | "ENTERTAINMENT" | "AUTO_VEHICLE" | "AUTO_MODEL" | "MINI_SERIES";
  ad_creation_eligible?: "NOT_AVAILABLE" | "AVAILABLE";
  create_time?: string;
  update_time?: string;
  bc_info?: {
  bc_id?: string;
  bc_name?: string;
  picture_url?: string;
};
  catalog_conf?: {
  country?: string;
  currency?: string;
  channel?: "PARTNER" | "CLIENT";
  additional_config_list?: {
  region_code?: string;
  currency?: string;
}[];
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CatalogLexiconGetParams {
  bc_id: string;
  catalog_id: string;
}


export interface CatalogLexiconGetResponse {}


export interface CatalogCapitalizeParams {
  bc_id: string;
  advertiser_id: string;
  catalog_id: string;
}


export interface CatalogCapitalizeResponse {
  code?: number;
  message?: string;
  request_id?: string;
}


export interface CatalogAvailableCountryGetParams {
  bc_id: string;
}


export interface CatalogAvailableCountryGetResponse {
  region_codes?: string[];
}


export interface CatalogLocationCurrencyGetParams {}


export interface CatalogLocationCurrencyGetResponse {
  list?: {
  location?: string;
  currency?: string[];
}[];
}


export interface CatalogOverviewParams {
  bc_id: string;
  catalog_id: string;
}


export interface CatalogOverviewResponse {
  approved?: number;
  rejected?: number;
  processing?: number;
  organic_approved?: number;
  organic_rejected?: number;
  organic_processing?: number;
}
