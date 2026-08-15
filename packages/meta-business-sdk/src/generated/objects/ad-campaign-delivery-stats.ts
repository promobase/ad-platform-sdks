// @generated
// fingerprint: sha256:6a7630d8f416d625a798f393850f4e338a24b7bcada029ea69a2d4a6164a4bda
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdCampaignDeliveryStatsUnsupportedReasonsFields } from "./ad-campaign-delivery-stats-unsupported-reasons.ts";
import type { AdCampaignLearningStageInfoFields } from "./ad-campaign-learning-stage-info.ts";

export interface AdCampaignDeliveryStatsFields {
  bid_recommendation: number;
  current_average_cost: number;
  last_significant_edit_ts: number;
  learning_stage_exit_info: Record<string, unknown>;
  learning_stage_info: AdCampaignLearningStageInfoFields;
  unsupported_features: Record<string, AdCampaignDeliveryStatsUnsupportedReasonsFields>[];
}

