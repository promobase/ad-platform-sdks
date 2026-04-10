// Auto-generated types for Pangle — do not edit

export interface PangleBlockListGetParams {
  advertiser_id: string;
}


export interface PangleBlockListGetResponse {
  code?: number;
  message?: string;
  data?: {
  app_list?: string[];
  app_package_id?: string;
  modify_time?: string;
};
  request_id?: string;
}


export interface PangleBlockListUpdateParams {
  advertiser_id: string;
  add_app_list?: string[];
  delete_app_list?: string[];
  clear_old_app?: boolean;
}


export interface PangleBlockListUpdateResponse {
  code?: number;
  message?: string;
  data?: {
  success_count?: number;
};
  request_id?: string;
}


export interface PangleAudiencePackageGetParams {
  advertiser_id: string;
}


export interface PangleAudiencePackageGetResponse {
  code?: number;
  message?: string;
  data?: {
  packages?: {
  bind_type?: string;
  package_id?: string;
  package_name?: string;
}[];
};
  request_id?: string;
}

