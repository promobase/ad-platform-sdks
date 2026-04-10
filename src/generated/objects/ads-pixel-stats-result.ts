import type { AdsPixelStatsFields } from "./ads-pixel-stats.ts";

export interface AdsPixelStatsResultFields {
  aggregation: string;
  data: AdsPixelStatsFields[];
  start_time: string;
}

