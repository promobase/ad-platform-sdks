// @generated
// fingerprint: sha256:977bd579847687d21a93a7fb9777b435b64d3d36ff732a563e9eaecf569e2d14
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Catalog Products — do not edit

export interface CatalogProductFileParams {
  bc_id: string;
  catalog_id: string;
  feed_id?: string;
  file_url: string;
  update_mode?: "OVERWRITE" | "INCREMENTAL";
}


export interface CatalogProductFileResponse {
  feed_log_id?: string;
}


export interface CatalogProductUploadParams {
  bc_id: string;
  catalog_id: string;
  feed_id?: string;
  products: Record<string, unknown>[];
}


export interface CatalogProductUploadResponse {
  feed_log_id?: string;
}


export interface CatalogProductUpdateParams {
  bc_id: string;
  catalog_id: string;
  feed_id?: string;
  products: Record<string, unknown>[];
}


export interface CatalogProductUpdateResponse {
  feed_log_id?: string;
}


export interface CatalogProductDeleteParams {
  bc_id: string;
  catalog_id: string;
  sku_ids?: string[];
  hotel_ids?: string[];
  flight_ids?: string[];
  destination_ids?: string[];
  vehicle_ids?: string[];
  series_ids?: string[];
  feed_id?: string;
}


export interface CatalogProductDeleteResponse {}


export interface CatalogProductGetParams {
  bc_id: string;
  catalog_id: string;
  page?: number;
  page_size?: number;
  product_ids?: string[];
  sku_ids?: string[];
  product_set_ids?: string[];
  order?: {
  order_condition?: string;
  custom_order?: {
  field?: string;
  type?: "ASC" | "DES";
}[];
};
  conditions?: {
  "and / or"?: {
  field?: string;
  operator?: "EQ" | "NE" | "GT" | "GTE" | "LT" | "LTE" | "RNG" | "WILDCARD" | "NOT_WILDCARD" | "PREFIX" | "EXIST" | "IN" | "NOT_IN";
  values?: string[];
  case_senstive?: boolean;
}[];
};
}


export interface CatalogProductGetResponse {
  list?: {
  audit?: {
  audit_status?: string;
  rejected_info?: {
  reason?: string;
  suggestion?: string;
  affected_placement?: string[];
  affected_country?: string[];
}[];
};
  ad_creation_eligible?: "AVAILABLE" | "NOT_AVAILABLE" | "ACTIVATED" | "IN_STOCK" | "AVAILABLE_FOR_ORDER" | "PREORDER";
  active_status?: "ACTIVATED" | "DEACTIVATED";
  sku_id?: string;
  product_id?: string;
  title?: string;
  description?: string;
  availability?: string;
  image_url?: string;
  video_url?: string;
  brand?: string;
  additional_image_urls?: string[];
  item_group_id?: string;
  google_product_category?: string;
  global_trade_item_number?: string;
  manufacturer_part_number?: string;
  hotel_id?: string;
  name?: string;
  hotel_category?: string[];
  hotel_retailer_id?: string;
  address?: {
  address?: string;
  secondary_address?: string;
  tertiary_address?: string;
  city?: string;
  region?: string;
  country?: string;
  postal_code?: string;
};
  neighborhood?: string;
  postal_code?: string;
  latitude?: number;
  longitude?: number;
  series_id?: string;
  series_name?: string;
  target_config?: {
  region_code?: string;
  currency?: string;
};
  recharge?: {
  type?: "BY_TIERS" | "SUBSCRIPTION" | "BY_EPISODES";
  purchase_unit?: string[];
  cost?: string;
}[];
  margin_level?: string;
  loyalty_program?: string;
  guest_ratings?: {
  rating_system?: string;
  max_score?: number;
  score?: number;
  number_of_reviewers?: number;
}[];
  star_rating?: number;
  room_type?: string[];
  priority?: number;
  flight_id?: string;
  origin_airport?: string;
  destination_airport?: string;
  origin_city?: string;
  destination_city?: string;
  cabin_class?: "FIRST_CLASS" | "FIRST_CLASS_SUITE" | "BUSINESS_CLASS" | "BUSINESS_CLASS_SUITE" | "COMFORT_CLASS" | "ECONOMY_CLASS" | "BASIC_ECONOMY" | "STANDARD_ECONOMY" | "PREMIUM_ECONOMY" | "LIE_FLAT_SEAT" | "CHARTER_CLASS" | "ELITE_CLASS" | "QUIET_CLASS";
  airline_company?: "AEROFLOT" | "AIR_FRANCE_KLM_GROUP" | "ALASKA_AIRLINES" | "ANA" | "AMERICAN_AIRLINES" | "BRITISH_AIRWAYS" | "CATHAY_PACIFIC" | "CHINA_SOUTHERN_AIRLINES" | "CHINA_EASTERN_AIRLINES" | "DELTA_AIR_LINES" | "EMIRATES" | "JAPAN_AIRLINES" | "JETBLUE_AIRWAYS" | "KLM_ROYAL_DUTCH_AIRLINES" | "LUFTHANSA_GROUP" | "QANTAS_AIRWAYS" | "QATAR_AIRWAYS" | "SINGAPORE_AIRLINES" | "SOUTHWEST_AIRLINES" | "TURKISH_AIRLINES" | "UNITED_AIRLINES" | "VIRGIN_ATLANTIC";
  destination_id?: string;
  destination_name?: string;
  types?: string[];
  media_title_id?: string;
  timeline?: "COMING_SOON" | "ONLINE" | "EXPIRE_SOON";
  category?: "MOVIE" | "MUSIC" | "TV_SHOW" | "TV_SERIES" | "SPORTS_GAME" | "LIVE_EVENT";
  genres?: string[];
  qid?: string;
  vehicle_id?: string;
  state_of_vehicle?: "NEW" | "USED" | "CPO";
  vehicle_type?: "BOAT" | "CAR_TRUCK" | "COMMERCIAL" | "MOTORCYCLE" | "POWERSPORT" | "RV_CAMPER" | "TRAILER" | "OTHER";
  make?: string;
  model?: string;
  trim?: string;
  year?: number;
  vin?: string;
  mileage?: {
  value?: number;
  unit?: "MILE" | "KILOMETER";
};
  body_style?: "CONVERTIBLE" | "COUPE" | "CROSSOVER" | "HATCHBACK" | "MINIVAN" | "SMALL_CAR" | "SEDAN" | "SUV" | "TRUCK" | "VAN" | "WAGON" | "OTHER";
  exterior_color?: string;
  interior_color?: string;
  transmission?: "AUTOMATIC" | "MANUAL";
  drivetrain?: "AWD" | "FWD" | "RWD" | "OTHER";
  fuel_type?: "DIESEL" | "ELECTRIC" | "FLEX" | "GASOLINE" | "HYBRID" | "OTHER";
  dealer?: {
  dealer_id?: string;
  dealer_name?: string;
  dealer_phone?: string;
  stock_number?: string;
};
  date_first_on_lot?: string;
  days_on_lot?: number;
  profession?: {
  age_group?: "NEW_BORN" | "INFANT" | "TODDLER" | "KIDS" | "ADULT";
  color?: string;
  condition?: string;
  gender?: "MALE" | "FEMALE" | "UNISEX";
  material?: string;
  pattern?: string;
  product_category?: string;
  shipping?: string;
  shipping_weight?: string;
  size?: string;
  tax?: string;
  offer_type?: string;
  term_length?: string;
  offer_term_qualifier?: string;
  amount_price?: string;
  amount_percentage?: string;
  amount_qualifier?: string;
  downpayment?: string;
  downpayment_qualifier?: string;
  offer_disclaimer?: string;
  offer_disclaimer_url?: string;
  emission_disclaimer?: string;
  emission_disclaimer_url?: string;
  emission_overlay_disclaimer?: string;
  emission_image_link?: string;
  company_type?: "COPYRIGHT_HOLDER" | "DISTRIBUTOR";
  copyright_holder_name?: string;
  app_id?: string;
  minis_id?: string;
  total_episodes?: number;
  initial_paid_episodes?: number;
  per_episode_duration?: number;
  spoken_language?: string;
  subtitle_language?: string;
  production_type?: "LOCAL" | "TRANSLATION";
  target_audience?: "MALE" | "FEMALE" | "NEUTRAL";
  characters?: string[];
  genres?: string[];
  historical_context?: string[];
  actors?: string[];
};
  price?: {
  price?: number;
  currency?: string;
  sale_price?: number;
  sale_price_effective_date?: string[];
};
  landing_page?: {
  landing_page_url?: string;
  ios_url?: string;
  ios_app_store_id?: string;
  ios_app_name?: string;
  iphone_app_store_id?: string;
  iphone_app_name?: string;
  ipad_app_store_id?: string;
  ipad_app_name?: string;
  android_url?: string;
  android_package?: string;
  android_app_name?: string;
};
  extra_info?: {
  custom_label_0?: string;
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
  internal_label_0?: string;
  internal_label_1?: string;
};
  image_status?: "PROCESSING" | "SUCCESS" | "FAIL" | "FILTERED" | "NOT_SUPPORTED" | "NO_FOUND";
  additional_product_list?: {
  audit?: {
  audit_status?: string;
};
  rejected_info?: {
  reason?: string;
  suggestion?: string;
  affected_placement?: string[];
  affected_country?: string[];
}[];
  active_status?: "ACTIVATED" | "DEACTIVATED";
  image_status?: "PROCESSING" | "SUCCESS" | "FAIL" | "FILTERED" | "NOT_SUPPORTED" | "NO_FOUND";
  product_id?: string;
  series_id?: string;
  series_name?: string;
  target_config?: {
  region_code?: string;
  currency?: string;
};
  image_url?: string;
  recharge?: {
  type?: "BY_TIERS" | "SUBSCRIPTION" | "BY_EPISODES";
  purchase_unit?: string[];
  cost?: string;
}[];
  profession?: {
  company_type?: "COPYRIGHT_HOLDER" | "DISTRIBUTOR";
  copyright_holder_name?: string;
  app_id?: string;
  minis_id?: string;
  total_episodes?: number;
  initial_paid_episodes?: number;
  per_episode_duration?: number;
  spoken_language?: string;
  subtitle_language?: string;
  production_type?: "LOCAL" | "TRANSLATION";
  target_audience?: "MALE" | "FEMALE" | "NEUTRAL";
  characters?: string[];
  genres?: string[];
  historical_context?: string[];
  actors?: string[];
};
  video_url?: string;
  additional_image_urls?: string[];
  global_trade_item_number?: string;
  manufacturer_part_number?: string;
  landing_page?: {
  landing_page_url?: string;
};
  extra_info?: {
  custom_label_0?: string;
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
};
}[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface CatalogProductLogParams {
  bc_id: string;
  catalog_id: string;
  feed_log_id: string;
  language?: string;
}


export interface CatalogProductLogResponse {
  product_feed_log?: {
  catalog_id?: string;
  feed_id?: string;
  add_count?: number;
  update_count?: number;
  delete_count?: number;
  error_count?: number;
  warn_count?: number;
  process_status?: "WAITING" | "PROCESSING" | "SUCCESS" | "FAILED";
  update_mode?: number;
  start_time?: string;
  end_time?: string;
  feed_log_data?: {
  download_path?: Record<string, unknown>;
  error_affected_products?: {
  affected_product_count?: number;
  affected_product_item_list?: {
  index?: number;
  title?: string;
  sku_id?: string;
  hotel_id?: string;
  name?: string;
  flight_id?: string;
  airline_company?: string;
  media_title_id?: string;
  vehicle_id?: string;
  series_id?: string;
  make?: string;
  product_url?: string;
  description?: string;
  value?: string;
}[];
  field?: string;
  issue?: string;
  suggestion?: string;
}[];
  warn_affected_products?: {
  affected_product_count?: number;
  affected_product_item_list?: {
  index?: number;
  title?: string;
  sku_id?: string;
  hotel_id?: string;
  name?: string;
  flight_id?: string;
  airline_company?: string;
  media_title_id?: string;
  description?: string;
  vehicle_id?: string;
  series_id?: string;
  make?: string;
  product_url?: string;
  value?: string;
}[];
  field?: string;
  issue?: string;
  suggestion?: string;
}[];
};
};
}
