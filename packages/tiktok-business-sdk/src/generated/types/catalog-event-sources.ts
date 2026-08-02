// Auto-generated types for Catalog Event Sources — do not edit

export interface CatalogEventsourceBindParams {
  advertiser_id: string;
  bc_id: string;
  catalog_id: string;
  app_id?: string;
  pixel_code?: string;
}


export interface CatalogEventsourceBindResponse {
  code?: number;
  message?: string;
}


export interface CatalogEventsourceUnbindParams {
  advertiser_id: string;
  bc_id: string;
  catalog_id: string;
  app_id?: string;
  pixel_code?: string;
}


export interface CatalogEventsourceUnbindResponse {
  code?: number;
  message?: string;
}


export interface CatalogEventsourceBindGetParams {
  bc_id: string;
  catalog_id: string;
}


export interface CatalogEventsourceBindGetResponse {
  code?: number;
  message?: string;
  data?: {
  catalog_id?: number;
  event_sources?: {
  event_source_name?: string;
  app_id?: string;
  pixel_code?: string;
}[];
};
  request_id?: string;
}

