// Auto-generated types for Catalog Products — do not edit

export interface CatalogProductFileParams {
  bc_id: string;
  catalog_id: string;
  feed_id?: string;
  file_url: string;
  update_mode?: string;
}


export interface CatalogProductFileResponse {}


export interface CatalogProductUploadParams {
  products: {
  sku_id: string;
  title: string;
  description: string;
  availability: string;
  brand: string;
  image_url: string;
  additional_image_urls?: string[];
  video_url?: string;
  item_group_id?: string;
  google_product_category?: string;
  global_trade_item_number?: string;
  manufacturer_part_number?: string;
  product_detail: {
  condition: string;
  age_group?: string;
  color?: string;
  gender?: string;
  material?: string;
  pattern?: string;
  product_category?: string;
  shipping?: string;
  shipping_weight?: string;
  size?: string;
  tax?: string;
};
  price_info: {
  price: number;
  currency?: string;
  sale_price?: number;
  sale_price_effective_date?: string;
};
  landing_page: {
  landing_page_url: string;
  ios_url?: string;
  ios_app_store_id?: string;
  ios_app_name?: string;
  iphone_app_store_id?: string;
  iphone_app_name?: string;
  ipad_app_store_id?: string;
  ipad_app_name?: string;
  android_url?: string;
  android_package?: string;
  android_app_name?: string;
};
  extra_info?: {
  custom_label_0?: string;
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
};
}[];
}


export interface CatalogProductUploadResponse {}


export interface CatalogProductUpdateParams {
  products: {
  sku_id: string;
  title?: string;
  description?: string;
  availability?: string;
  image_url?: string;
  video_url?: string;
  brand?: string;
  additional_image_urls?: string[];
  item_group_id?: string;
  google_product_category?: string;
  global_trade_item_number?: string;
  manufacturer_part_number?: string;
  product_detail?: {
  condition?: string;
  age_group?: string;
  color?: string;
  gender?: string;
  material?: string;
  pattern?: string;
  product_category?: string;
  shipping?: string;
  shipping_weight?: string;
  size?: string;
  tax?: string;
};
  price_info?: {
  price?: number;
  currency?: string;
  sale_price?: number;
  sale_price_effective_date?: string;
};
  landing_page?: {
  landing_page_url?: string;
  ios_url?: string;
  ios_app_store_id?: string;
  ios_app_name?: string;
  iphone_app_store_id?: string;
  iphone_app_name?: string;
  ipad_app_store_id?: string;
  ipad_app_name?: string;
  android_url?: string;
  android_package?: string;
  android_app_name?: string;
};
  extra_info?: {
  custom_label_0?: string;
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
};
}[];
}


export interface CatalogProductUpdateResponse {}


export interface CatalogProductDeleteParams {}


export interface CatalogProductDeleteResponse {}


export interface CatalogProductGetParams {}


export interface CatalogProductGetResponse {}


export interface CatalogProductLogParams {}


export interface CatalogProductLogResponse {}

