export interface ALMGuidanceMetricsFields {
  ad_account_id: string;
  adopted_objects: Record<string, unknown>[];
  guidance_name: string;
  guidance_type: string;
  l28_adoption: number;
  l28_available: number;
  l28_click: number;
  l28_conversion: number;
  l28_has_click: boolean;
  l28_has_impression: boolean;
  l28_impression: number;
  l28_is_actioned: boolean;
  l28_is_adopted: boolean;
  l28_is_available: boolean;
  l28_is_pitched: boolean;
  l28_pitch: number;
  l28d_adopted_revenue: number;
  last_actioned_ds: string;
  last_adopted_ds: string;
  last_pitch_ds: string;
  parent_advertiser_id: string;
  report_ds: string;
}

