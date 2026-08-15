// @generated
// fingerprint: sha256:a12e158cab9a297e8a8c98fed0c0111cc41fb1df9c2653642f59be30a94ab3e0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OutcomePredictionPointFields } from "./outcome-prediction-point.ts";

export interface AdAccountDeliveryEstimateFields {
  daily_outcomes_curve: OutcomePredictionPointFields[];
  estimate_dau: number;
  estimate_mau_lower_bound: number;
  estimate_mau_upper_bound: number;
  estimate_ready: boolean;
  targeting_optimization_types: Record<string, number>[];
}

