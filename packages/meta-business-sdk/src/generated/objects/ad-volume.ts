export interface AdVolumeFields {
  ad_volume_break_down: Record<string, unknown>[];
  ads_running_or_in_review_count: number;
  future_limit_activation_date: string;
  future_limit_on_ads_running_or_in_review: number;
  individual_accounts_ad_volume: number;
  is_gpa_page: boolean;
  limit_on_ads_running_or_in_review: number;
  owning_business_ad_volume: number;
  partner_business_ad_volume: number;
  user_role: string;
}

