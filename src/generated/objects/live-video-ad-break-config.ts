export interface LiveVideoAdBreakConfigFields {
  default_ad_break_duration: number;
  failure_reason_polling_interval: number;
  first_break_eligible_secs: number;
  guide_url: string;
  is_eligible_to_onboard: boolean;
  is_enabled: boolean;
  onboarding_url: string;
  preparing_duration: number;
  time_between_ad_breaks_secs: number;
  viewer_count_threshold: number;
}

