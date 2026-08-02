// Auto-generated types for Creative Portfolios — do not edit

export interface CreativePortfolioCreateParams {
  advertiser_id: string;
  creative_portfolio_type?: "CTA" | "CARD" | "WEB_INFO_CARD" | "DOWNLOAD_CARD" | "INVENTORY_CARD" | "PRODUCT_CARD" | "PRODUCT_TILE" | "STICKER" | "PREMIUM_BADGE" | "GESTURE" | "SUPER_LIKE";
  portfolio_content?: {
  asset_content?: string;
  asset_ids?: string[];
  card_type?: string;
  gesture_type?: "CLICK" | "STRAIGHT_SLIDE" | "CURVED_SLIDE";
  image_id?: string;
  pop_up_window_image_id?: string;
  title?: string;
  selling_points?: string[];
  call_to_action_text?: string;
  badge_show_time?: number;
  badge_position?: {
  position_x?: number;
  position_y?: number;
  angle?: number;
};
  badge_image_info?: {
  image_id?: string;
};
  slide_length?: number;
  slide_dimension?: {
  dimension_width?: number;
  dimension_height?: number;
};
  interactive_music_id?: string;
  layouts?: ("TYPE_1" | "TYPE_2")[];
  description?: string;
  tags?: ("CATEGORIES" | "FILESIZE" | "RATING" | "RANKING" | "COMMENT_VOLUME")[];
  category_label?: string;
  app_id?: string;
  profile_image?: string;
  call_to_action?: string;
  mobile_app_id?: string;
  country_code?: string[];
  sticker_param?: {
  sticker_type?: "COUNTDOWN" | "REMINDER_COUNTDOWN" | "LIVE_REMINDER_COUNTDOWN" | "GIFTCODE";
  title?: string;
  giftcode?: string;
  cutoff_time?: string;
  color?: string;
  display_angle?: number;
  predefined_placement?: string;
  position_x?: number;
  position_y?: number;
  size?: string;
  opacity?: string;
  reminder_time?: string;
  landing_page_url?: string;
  live_tiktok_user_id?: string;
};
  product_source?: "UNSET" | "CATALOG" | "STORE" | "SHOWCASE";
  identity_id?: string;
  identity_type?: "CUSTOMIZED_USER" | "AUTH_CODE" | "TT_USER" | "BC_AUTH_TT";
  identity_authorized_bc_id?: string;
  catalog_id?: string;
  catalog_authorized_bc_id?: string;
  store_id?: string;
  store_authorized_bc_id?: string;
  product_specific_type?: "ALL" | "PRODUCT_SET" | "CUSTOMIZED_PRODUCTS";
  product_set_id?: string;
  item_group_ids?: string[];
  sku_ids?: string[];
  dynamic_format?: "UNSET" | "DYNAMIC_CREATIVE";
  vertical_video_strategy?: "UNSET" | "SINGLE_VIDEO" | "CATALOG_VIDEOS" | "DYNAMIC_CREATIVE";
  ad_text?: string;
  card_show_price?: boolean;
  card_tags?: ("BRAND" | "DESC")[];
  card_image_index?: number;
  showcase_products?: {
  item_group_id?: string;
  store_id?: string;
  catalog_id?: string;
}[];
}[];
}


export interface CreativePortfolioCreateResponse {
  creative_portfolio_id?: string;
}


export interface CreativePortfolioGetParams {
  advertiser_id: string;
  creative_portfolio_id: string;
}


export interface CreativePortfolioGetResponse {
  creative_portfolio_id?: string;
  creative_portfolio_type?: "CTA" | "CARD" | "WEB_INFO_CARD" | "DOWNLOAD_CARD" | "INVENTORY_CARD" | "PRODUCT_CARD" | "PRODUCT_TILE" | "STICKER" | "PREMIUM_BADGE" | "GESTURE" | "SUPER_LIKE" | "WEB_CONVERSIONS" | "TRAFFIC" | "WEBSITE" | "REACH" | "VIDEO_VIEW" | "APP_PROMOTION" | "LEAD_GENERATION" | "PRODUCT_SALES" | "RF_REACH" | "REMINDER_COUNTDOWN" | "LIVE_REMINDER_COUNTDOWN" | "VIDEO_VIEWS" | "ENGAGED_VIEW" | "ENGAGEMENT" | "PAGE_VISIT";
  portfolio_content?: {
  asset_content?: string;
  asset_ids?: string[];
  card_type?: string;
  gesture_type?: "CLICK" | "STRAIGHT_SLIDE" | "CURVED_SLIDE";
  image_id?: string;
  pop_up_window_image_id?: string;
  title?: string;
  selling_points?: string[];
  content_url?: string;
  thumbnail_id?: string;
  call_to_action_text?: string;
  badge_show_time?: number;
  badge_position?: {
  position_x?: number;
  position_y?: number;
  angle?: number;
};
  badge_image_info?: {
  image_id?: string;
};
  slide_length?: number;
  slide_dimension?: {
  dimension_width?: number;
  dimension_height?: number;
};
  interactive_music_id?: string;
  layouts?: ("TYPE_1" | "TYPE_2")[];
  description?: string;
  tags?: ("CATEGORIES" | "FILESIZE" | "RATING" | "RANKING" | "COMMENT_VOLUME")[];
  category_label?: string;
  app_id?: string;
  sticker_param?: {
  sticker_type?: "COUNTDOWN" | "REMINDER_COUNTDOWN" | "LIVE_REMINDER_COUNTDOWN" | "GIFTCODE";
  title?: string;
  giftcode?: string;
  cutoff_time?: string;
  color?: string;
  display_angle?: number;
  predefined_placement?: string;
  position_x?: number;
  position_y?: number;
  size?: string;
  opacity?: string;
  reminder_time?: string;
  landing_page_url?: string;
  live_tiktok_user_id?: string;
};
  card_show_price?: boolean;
  card_tags?: ("BRAND" | "DESC")[];
  card_image_index?: number;
}[];
}


export interface CreativePortfolioListParams {
  advertiser_id: string;
  filtering?: {
  creative_portfolio_types?: ("CARD" | "WEB_INFO_CARD" | "DOWNLOAD_CARD" | "INVENTORY_CARD" | "PRODUCT_CARD" | "PRODUCT_TILE" | "COUNTDOWN_STICKER" | "REMINDER_COUNTDOWN_STICKER" | "LIVE_REMINDER_COUNTDOWN_STICKER" | "GIFTCODE_STICKER" | "PREMIUM_BADGE" | "GESTURE" | "SUPER_LIKE")[];
  creative_portfolio_ids?: string[];
};
  page?: number;
  page_size?: number;
}


export interface CreativePortfolioListResponse {
  creative_portfolios?: {
  creative_portfolio_id?: string;
  creative_portfolio_type?: "CARD" | "WEB_INFO_CARD" | "DOWNLOAD_CARD" | "INVENTORY_CARD" | "PRODUCT_CARD" | "PRODUCT_TILE" | "COUNTDOWN_STICKER" | "REMINDER_COUNTDOWN_STICKER" | "LIVE_REMINDER_COUNTDOWN_STICKER" | "GIFTCODE_STICKER" | "PREMIUM_BADGE" | "GESTURE" | "SUPER_LIKE";
  creative_portfolio_preview_url?: string;
  card_type?: string;
  gesture_type?: "CLICK" | "STRAIGHT_SLIDE" | "CURVED_SLIDE";
  image_id?: string;
  pop_up_window_image_id?: string;
  title?: string;
  selling_points?: string[];
  content_url?: string;
  thumbnail_id?: string;
  call_to_action_text?: string;
  badge_show_time?: number;
  badge_position?: {
  position_x?: number;
  position_y?: number;
  angle?: number;
};
  badge_image_info?: {
  image_id?: string;
};
  slide_length?: number;
  slide_dimension?: {
  dimension_width?: number;
  dimension_height?: number;
};
  interactive_music_id?: string;
  layouts?: ("TYPE_1" | "TYPE_2")[];
  description?: string;
  tags?: ("CATEGORIES" | "FILESIZE" | "RATING" | "RANKING" | "COMMENT_VOLUME")[];
  category_label?: string;
  app_id?: string;
  sticker_param?: {
  sticker_type?: "COUNTDOWN" | "REMINDER_COUNTDOWN" | "LIVE_REMINDER_COUNTDOWN" | "GIFTCODE";
  title?: string;
  giftcode?: string;
  cutoff_time?: string;
  color?: string;
  display_angle?: number;
  predefined_placement?: string;
  position_x?: number;
  position_y?: number;
  size?: string;
  opacity?: string;
  reminder_time?: string;
  landing_page_url?: string;
  live_tiktok_user_id?: string;
};
  card_show_price?: boolean;
  card_tags?: ("BRAND" | "DESC")[];
  card_image_index?: number;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CreativePortfolioDeleteParams {
  advertiser_id: string;
  creative_portfolio_ids: string[];
}


export interface CreativePortfolioDeleteResponse {}
