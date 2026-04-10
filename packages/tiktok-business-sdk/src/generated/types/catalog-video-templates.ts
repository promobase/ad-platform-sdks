// Auto-generated types for Catalog Video Templates — do not edit

export interface CatalogVideoPackageGetParams {}


export interface CatalogVideoPackageGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: object [];
  shopping_ads_video_package_id?: string;
  catalog_id?: string;
  video_package_name?: string;
  create_time?: string;
  update_time?: string;
  status?: string;
  video_package_type?: string;
  audit?: {
  audit_status?: string;
  reject_info?: {
  rejected_object?: string;
  reason?: string;
}[];
};
}

