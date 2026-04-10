import type { AdsActionStatsFields } from "./ads-action-stats.ts";

export interface BusinessCreativeInsightsFields {
  actions: AdsActionStatsFields[];
  age: string;
  country: string;
  date_end: string;
  date_start: string;
  device_platform: string;
  gender: string;
  impressions: number;
  inline_link_clicks: number;
  objective: string;
  optimization_goal: string;
  platform_position: string;
  publisher_platform: string;
  quality_ranking: string;
  video_play_actions: AdsActionStatsFields[];
  video_thruplay_watched_actions: AdsActionStatsFields[];
}

