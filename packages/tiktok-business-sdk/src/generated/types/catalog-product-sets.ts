// Auto-generated types for Catalog Product Sets — do not edit

export interface CatalogSetGetParams {
  bc_id: string;
  catalog_id: string;
  product_set_id?: string;
  return_product_count?: "true" | "false";
}


export interface CatalogSetGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  list?: {
  product_count?: number;
  product_set_id?: string;
  catalog_id?: string;
  product_set_name?: string;
  conditions?: {
  "and/or"?: {
  field?: string;
  operation?: string;
  value?: string | string[];
}[];
};
}[];
};
}


export interface CatalogSetProductGetParams {
  bc_id: string;
  catalog_id: string;
  product_set_id: string;
  page?: number;
  page_size?: number;
}


export interface CatalogSetProductGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  product_set_id?: string;
  catalog_id?: string;
  product_count?: string;
  products?: {
  product_id?: number;
  product_name?: string;
  sku_id?: string;
  hotel_id?: string;
  flight_id?: string;
  destination_id?: string;
  vehicle_id?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
};
}


export interface CatalogSetCreateParams {
  bc_id: string;
  catalog_id: string;
  product_set_name: string;
  conditions: {
  "and/or": {
  field: string;
  operation: string;
  value: string | string[];
}[];
};
}


export interface CatalogSetCreateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  product_set_id?: string;
  product_set_name?: string;
  product_count?: number;
};
}


export interface CatalogSetUploadParams {
  bc_id: string;
  catalog_id: string;
  product_set_name: string;
  file: File | Blob;
  file_signature: string;
}


export interface CatalogSetUploadResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  product_set_id?: string;
  product_set_name?: string;
};
}


export interface CatalogSetUpdateParams {
  bc_id: string;
  catalog_id: string;
  product_set_id: string;
  product_set_name?: string;
  conditions?: {
  "and/or"?: {
  field?: string;
  operation?: string;
  value?: string | string[];
}[];
};
}


export interface CatalogSetUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  product_set_id?: string;
  product_set_name?: string;
  product_count?: number;
};
}


export interface CatalogSetDeleteParams {
  bc_id: string;
  catalog_id: string;
  product_set_ids: string[];
}


export interface CatalogSetDeleteResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  product_set_ids?: string[];
};
}

