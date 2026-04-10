import type { OutcomePredictionPointFields } from "./outcome-prediction-point.ts";

export interface AdCampaignDeliveryEstimateFields {
  daily_outcomes_curve: OutcomePredictionPointFields[];
  estimate_dau: number;
  estimate_mau_lower_bound: number;
  estimate_mau_upper_bound: number;
  estimate_ready: boolean;
  targeting_optimization_types: Record<string, number>[];
}

