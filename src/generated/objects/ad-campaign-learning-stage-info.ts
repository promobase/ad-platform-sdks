export interface AdCampaignLearningStageInfoFields {
  attribution_windows: string[];
  cas_segment: string;
  conversions: number;
  current_budget_prediction: Record<string, unknown>;
  dynamic_lp_conversions_threshold: number;
  dynamic_lp_days_threshold: number;
  dynamic_lp_status: string;
  is_one_to_one_cbo_budget: boolean;
  last_sig_edit_ts: number;
  recommended_budget_prediction: Record<string, unknown>;
  sigedit_removal: boolean;
  status: string;
}

