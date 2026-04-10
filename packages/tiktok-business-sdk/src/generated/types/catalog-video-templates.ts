// Auto-generated types for Catalog Video Templates — do not edit

export interface CatalogVideoPackageGetParams {}


export interface CatalogVideoPackageGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: string;
  shopping_ads_video_package_id?: string;
  catalog_id?: string;
  video_package_name?: string;
  create_time?: string;
  update_time?: string;
  status?: "AVAILABLE" | "UNAVAILABLE";
  video_package_type?: "GREEN_SCREEN" | "TEMPLATE" | "DVG";
  audit?: {
  audit_status?: "PROCESSING" | "APPROVED" | "REJECTED";
  reject_info?: {
  rejected_object?: string;
  reason?: string;
}[];
};
}

