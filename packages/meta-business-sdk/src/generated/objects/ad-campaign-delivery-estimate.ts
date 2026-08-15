// @generated
// fingerprint: sha256:9b03bd6dd54668264e07140a4f9efe9145ae668280516cbff5cff6ce6b520248
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OutcomePredictionPointFields } from "./outcome-prediction-point.ts";

export interface AdCampaignDeliveryEstimateFields {
  daily_outcomes_curve: OutcomePredictionPointFields[];
  estimate_dau: number;
  estimate_mau_lower_bound: number;
  estimate_mau_upper_bound: number;
  estimate_ready: boolean;
  targeting_optimization_types: Record<string, number>[];
}

