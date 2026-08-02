// Auto-generated types for Discovery — do not edit

export interface DiscoveryTrendingListParams {
  advertiser_id: string;
  discovery_type: string;
  country_code?: string;
  category_name?: string;
  date_range?: string;
}


export interface DiscoveryTrendingListResponse {
  filter_info?: {
  date_range?: string;
  country_code?: string;
  category_name?: string;
};
  list?: {
  hashtag_id?: string;
  hashtag_name?: string;
  rank_position?: string;
  rank_change?: string;
  views?: number;
  views_global_lifetime?: number;
  posts?: number;
  posts_global_lifetime?: number;
  top_country_list?: string[];
  trending_history?: {
  date?: string;
  rank_position_daily?: string;
  views_daily?: number;
}[];
}[];
}


export interface DiscoveryDetailParams {
  advertiser_id: string;
  discovery_type: string;
  hashtag_id: string;
  country_code: string;
  date_range: string;
}


export interface DiscoveryDetailResponse {
  hashtag_id?: string;
  hashtag_name?: string;
  views?: number;
  views_global_lifetime?: number;
  posts?: number;
  posts_global_lifetime?: number;
  top_country_list?: string[];
  hashtag_status?: "ONLINE" | "OFFLINE";
  trending_history?: {
  date?: string;
  rank_position_daily?: string;
  views_daily?: number;
}[];
  audience_insights?: {
  audience_ages?: {
  age?: string;
  percentage?: number;
}[];
};
}


export interface DiscoveryVideoListParams {
  advertiser_id: string;
  discovery_type: string;
  hashtag_ids: string[];
  country_code?: string;
  date_range?: string;
}


export interface DiscoveryVideoListResponse {
  list?: {
  hashtag_id?: string;
  hashtag_name?: string;
  top_video_list?: {
  video_id?: string;
  embed_url?: string;
  share_url?: string;
}[];
}[];
}


export interface DiscoveryCmlTrendingListParams {
  business_id: string;
  genre?: string;
  country_code?: string;
  date_range?: string;
}


export interface DiscoveryCmlTrendingListResponse {
  list?: {
  commercial_music_id?: string;
  commercial_music_name?: string;
  duration?: number;
  thumbnail_url?: string;
  artist?: string;
  preview_url?: string;
  genres?: string[];
  rank_position?: string;
  trending_history?: {
  date?: string;
  rank_position_daily?: string;
}[];
  full_duration_song_clip?: {
  preview_url?: string;
  duration?: number;
  song_clip_id?: string;
};
  trending_song_clip?: {
  preview_url?: string;
  duration?: number;
  song_clip_id?: string;
};
}[];
}


export interface DiscoveryCmlVideoListParams {
  business_id: string;
  commercial_music_id: string;
  country_code?: string;
}


export interface DiscoveryCmlVideoListResponse {
  commercial_music_id?: string;
  commercial_music_name?: string;
  top_video_list?: {
  video_id?: string;
  embed_url?: string;
  share_url?: string;
}[];
}


export interface DiscoveryTrendingSearchParams {
  business_id: string;
  is_personalized?: boolean;
}


export interface DiscoveryTrendingSearchResponse {
  search_keywords?: string[];
}


export interface DiscoveryTrendingSearchKeywordParams {
  business_id: string;
  query: string;
  is_personalized?: boolean;
}


export interface DiscoveryTrendingSearchKeywordResponse {
  search_keywords?: string[];
}
