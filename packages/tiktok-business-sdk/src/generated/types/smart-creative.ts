// Auto-generated types for Smart Creative — do not edit

export interface AdAcoGetParams {
  adgroup_ids: string[];
  advertiser_id: string;
  exclude_field_types_in_response?: string[];
}


export interface AdAcoGetResponse {
  list?: {
  advertiser_id?: string;
  adgroup_id?: string;
  media_info_list?: {
  material_id?: string;
  material_operation_status?: "ENABLE" | "DISABLE";
  media_info?: {
  image_info?: {
  web_uri?: string;
  file_name?: string;
}[];
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  material_name?: string;
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER";
};
}[];
  title_list?: {
  title?: string;
  material_id?: string;
  material_operation_status?: "ENABLE" | "DISABLE";
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}[];
  display_name_list?: {
  app_name?: string;
  landing_page_name?: string;
}[];
  avatar_icon_list?: {
  avatar_icon?: {
  web_uri?: string;
};
}[];
  page_list?: {
  page_id?: string;
}[];
  card_list?: {
  card_id?: string;
}[];
  landing_page_urls?: string[];
  landing_page_url?: string;
  common_material?: {
  ad_name?: string;
  call_to_action_id?: string;
  creative_authorized?: boolean;
  playable_url?: string;
  fallback_type?: "WEBSITE" | "UNSET";
  tracking_info?: {
  impression_tracking_urls?: string[];
  click_tracking_urls?: string[];
  tracking_pixel_id?: string;
  tracking_app_id?: string;
  tracking_offline_event_set_ids?: string[];
};
  identity_id?: string;
  identity_type?: string;
  is_smart_creative?: boolean;
};
}[];
}


export interface AdAcoCreateParams {
  advertiser_id: string;
  adgroup_id: string;
  media_info_list: {
  media_info: {
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
  file_name?: string;
}[];
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER";
};
}[];
  title_list?: {
  title?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}[];
  display_name_list?: {
  app_name?: string;
  landing_page_name?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  card_list?: {
  card_id?: string;
}[];
  landing_page_urls?: {
  landing_page_url?: string;
}[];
  common_material?: {
  ad_name?: string;
  call_to_action_id?: string;
  creative_authorized?: boolean;
  playable_url?: string;
  fallback_type?: string;
  tracking_info?: {
  impression_tracking_urls?: string[];
  click_tracking_urls?: string[];
  tracking_pixel_id?: string;
  tracking_app_id?: string;
  tracking_offline_event_set_ids?: string[];
};
  identity_id?: string;
  identity_type?: string;
  is_smart_creative?: boolean;
};
}


export interface AdAcoCreateResponse {
  advertiser_id?: string;
  adgroup_id?: string;
  media_info_list?: {
  material_id?: string;
  material_operation_status?: "ENABLE" | "DISABLE";
  media_info?: {
  image_info?: {
  web_uri?: string;
  file_name?: string;
}[];
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER";
};
}[];
  title_list?: {
  title?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}[];
  display_name_list?: {
  app_name?: string;
  landing_page_name?: string;
}[];
  page_list?: {
  page_id?: string;
}[];
  card_list?: {
  card_id?: string;
}[];
  landing_page_urls?: {
  landing_page_url?: string;
}[];
  common_material?: {
  ad_name?: string;
  call_to_action_id?: string;
  creative_authorized?: boolean;
  playable_url?: string;
  fallback_type?: "WEBSITE" | "UNSET";
  tracking_info?: {
  impression_tracking_urls?: string[];
  click_tracking_urls?: string[];
  tracking_pixel_id?: string;
  tracking_app_id?: string;
  tracking_offline_event_set_ids?: string[];
};
  identity_id?: string;
  identity_type?: string;
  is_smart_creative?: boolean;
};
}


export interface AdAcoUpdateParams {
  advertiser_id: string;
  adgroup_id: string;
  patch_update?: boolean;
  media_info_list?: {
  media_info?: {
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  image_info?: {
  web_uri?: string;
  file_name?: string;
}[];
  aigc_disclosure_type?: "SELF_DISCLOSURE" | "NOT_DECLARED";
  tiktok_item_id?: string;
  identity_id?: string;
  identity_type?: "AUTH_CODE" | "TT_USER";
};
}[];
  title_list?: {
  title?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: "NORMAL" | "DEFERRED_DEEPLINK";
}[];
  display_name_list?: {
  app_name?: string;
  landing_page_name?: string;
}[];
  avatar_icon_list?: {
  avatar_icon?: {
  web_uri?: string;
};
}[];
  page_list?: {
  page_id?: string;
}[];
  card_list?: {
  card_id?: string;
}[];
  common_material?: {
  ad_name?: string;
  call_to_action_id?: string;
  creative_authorized?: boolean;
  playable_url?: string;
  fallback_type?: "WEBSITE" | "UNSET";
  tracking_info?: {
  impression_tracking_urls?: string[];
  click_tracking_urls?: string[];
  tracking_pixel_id?: string;
  tracking_app_id?: string;
  tracking_offline_event_set_ids?: string[];
};
  identity_id?: string;
  identity_type?: string;
};
}


export interface AdAcoUpdateResponse {
  advertiser_id?: string;
  adgroup_id?: string;
  media_info_list?: {
  material_id?: string;
  material_operation_status?: string;
  media_info?: {
  image_info?: {
  web_uri?: string;
  file_name?: string;
}[];
  video_info?: {
  video_id?: string;
  file_name?: string;
};
  aigc_disclosure_type?: string;
  tiktok_item_id?: string;
  identity_id?: string;
  identity_type?: string;
};
}[];
  title_list?: {
  title?: string;
}[];
  call_to_action_list?: {
  call_to_action?: string;
}[];
  deeplink_list?: {
  deeplink?: string;
  deeplink_type?: string;
}[];
  display_name_list?: {
  app_name?: string;
  landing_page_name?: string;
}[];
  avatar_icon?: {
  web_uri?: string;
};
  page_list?: {
  page_id?: string;
}[];
  card_list?: {
  card_id?: string;
}[];
  landing_page_urls?: {
  landing_page_url?: string;
}[];
  common_material?: {
  ad_name?: string;
  call_to_action_id?: string;
  creative_authorized?: boolean;
  playable_url?: string;
  fallback_type?: string;
  tracking_info?: {
  impression_tracking_urls?: string[];
  click_tracking_urls?: string[];
  tracking_pixel_id?: string;
  tracking_app_id?: string;
  tracking_offline_event_set_ids?: string[];
};
  identity_id?: string;
  identity_type?: string;
  is_smart_creative?: boolean;
};
}


export interface AdAcoMaterialStatusUpdateParams {
  advertiser_id: string;
  ad_group_id: string;
  material_ids: string[];
  material_status: "ENABLE" | "DISABLE";
}


export interface AdAcoMaterialStatusUpdateResponse {
  ad_group_id?: string;
  material_ids?: string[];
  material_status?: "ENABLE" | "DISABLE";
}
