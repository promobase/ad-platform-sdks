// @generated
// fingerprint: sha256:7ff0f401202f8e72c61bb893c53b177e7b76f1b704770d7ff61a453f8d7c63a7
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Brand Safety — do not edit

export interface TiktokInventoryFiltersGetParams {
  advertiser_id: string;
}


export interface TiktokInventoryFiltersGetResponse {
  cover_all_ad_objectives?: boolean;
  brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY" | "NO_BRAND_SAFETY";
  category_exclusion_ids?: string[];
  vertical_sensitivity_id?: string;
}


export interface TiktokInventoryFiltersUpdateParams {
  advertiser_id: string;
  cover_all_ad_objectives: boolean;
  brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
  category_exclusion_ids?: string[];
  vertical_sensitivity_id?: string;
}


export interface TiktokInventoryFiltersUpdateResponse {
  cover_all_ad_objectives?: boolean;
  brand_safety_type?: "EXPANDED_INVENTORY" | "STANDARD_INVENTORY" | "LIMITED_INVENTORY";
  category_exclusion_ids?: string[];
  vertical_sensitivity_id?: string;
}
