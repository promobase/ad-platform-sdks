export interface AdsPixelMicrodataStatsFields {
  allowed_domains: string[];
  errors_stats_for_time_ranges: Record<string, unknown>[];
  has_valid_events: boolean;
  suggested_allowed_domains_count_max: number;
  suggested_trusted_domains: string[];
}

