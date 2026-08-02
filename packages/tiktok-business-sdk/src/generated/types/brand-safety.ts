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
