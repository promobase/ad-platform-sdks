// @generated
// fingerprint: sha256:64c40529e46cc1a729aa7888ce1f5340766bb7d1e6e93519495c8e6769cabda4
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Catalog Insights — do not edit

export interface CatalogInsightFilterGetParams {
  bc_id: string;
  catalog_id: string;
  filter_type: "CATEGORY_ID" | "BRAND" | "AVAILABILITY";
  page?: number;
  page_size?: number;
}


export interface CatalogInsightFilterGetResponse {
  brands?: string[];
  availabilities?: string[];
  categories?: {
  category_id?: string;
  level_info?: {
  level_id_1?: string;
  level_name_1?: string;
  level_id_2?: string;
  level_name_2?: string;
  level_id_3?: string;
  level_name_3?: string;
};
}[];
}


export interface CatalogInsightProductGetParams {
  bc_id: string;
  catalog_id: string;
  filtering?: {
  category_ids?: string[];
  brands?: string[];
  availabilities?: ("IN_STOCK" | "AVAILABLE_FOR_ORDER" | "PREORDER" | "OUT_OF_STOCK" | "DISCONTINUED")[];
};
}


export interface CatalogInsightProductGetResponse {
  product_insights?: {
  product_id?: string;
  image_url?: string;
  title?: string;
  description?: string;
  sku_id?: string;
  category_info?: {
  category_id?: string;
  level_info?: {
  level_id_1?: string;
  level_name_1?: string;
  level_id_2?: string;
  level_name_2?: string;
  level_id_3?: string;
  level_name_3?: string;
};
};
  brand?: string;
  price?: {
  price?: number;
  currency?: string;
  sale_price?: number;
  sale_price_effective_date?: string[];
};
  availability?: "IN_STOCK" | "AVAILABLE_FOR_ORDER" | "PREORDER" | "OUT_OF_STOCK" | "DISCONTINUED";
}[];
}


export interface CatalogInsightCategoryGetParams {
  bc_id: string;
  catalog_id: string;
  filtering?: {
  category_ids?: string[];
};
}


export interface CatalogInsightCategoryGetResponse {
  category_insights?: {
  category_id?: string;
  level_info?: {
  level_id_1?: string;
  level_name_1?: string;
  level_id_2?: string;
  level_name_3?: string;
  level_id_3?: string;
};
  total_product_count?: number;
  product_availability_rate?: number;
}[];
}
