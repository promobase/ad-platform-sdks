// Auto-generated types for Pangle — do not edit

export interface PangleBlockListGetParams {
  advertiser_id: string;
}


export interface PangleBlockListGetResponse {
  app_list?: string[];
  app_package_id?: string;
  modify_time?: string;
}


export interface PangleBlockListUpdateParams {
  advertiser_id: string;
  add_app_list?: string[];
  delete_app_list?: string[];
  clear_old_app?: boolean;
}


export interface PangleBlockListUpdateResponse {
  success_count?: number;
}


export interface PangleAudiencePackageGetParams {
  advertiser_id: string;
}


export interface PangleAudiencePackageGetResponse {
  packages?: {
  bind_type?: "EXCLUDE" | "INCLUDE";
  package_id?: string;
  package_name?: string;
}[];
}
