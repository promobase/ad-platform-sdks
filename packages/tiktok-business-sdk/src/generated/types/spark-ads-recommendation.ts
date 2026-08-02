// Auto-generated types for Spark Ads Recommendation — do not edit

export interface BusinessVideoRecommendParams {
  business_id: string;
  video_ids?: string[];
  exclude_video_ids?: string[];
  time?: "PAST_ONE_MONTH" | "PAST_THREE_MONTHS" | "PAST_SIX_MONTHS";
  objective_type?: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "ENGAGEMENT" | "APP_PROMOTION" | "LEAD_GENERATION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
}


export interface BusinessVideoRecommendResponse {
  videos?: {
  recommendation_level?: "HIGH" | "MEDIUM" | "LOW";
  item_id?: string;
  embed_url?: string;
  thumbnail_url?: string;
  create_time?: string;
  video_views?: number;
  likes?: number;
  comments?: number;
  shares?: number;
  audience_countries?: {
  country?: string;
  percentage?: number;
}[];
}[];
}


export interface SparkAdRecommendParams {
  tcm_account_id: string;
  video_ids?: string[];
  exclude_video_ids?: string[];
  time?: "PAST_ONE_MONTH" | "PAST_THREE_MONTHS" | "PAST_SIX_MONTHS";
  objective_type?: "REACH" | "TRAFFIC" | "VIDEO_VIEWS" | "APP_PROMOTION" | "LEAD_GENERATION" | "WEB_CONVERSIONS" | "PRODUCT_SALES";
}


export interface SparkAdRecommendResponse {
  videos?: {
  recommendation_level?: "HIGH" | "MEDIUM" | "LOW";
  item_id?: string;
  creator_handle?: string;
  embed_url?: string;
  thumbnail_url?: string;
  create_time?: string;
};
}
