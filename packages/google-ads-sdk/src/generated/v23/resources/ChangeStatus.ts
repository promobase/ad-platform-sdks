import type { ChangeStatusOperation, ChangeStatusResourceType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ChangeStatus. Do not edit by hand.
export interface ChangeStatus {
  resourceName?: string;
  lastChangeDateTime?: string;
  resourceType?: ChangeStatusResourceType;
  campaign?: string;
  adGroup?: string;
  resourceStatus?: ChangeStatusOperation;
  adGroupAd?: string;
  adGroupCriterion?: string;
  campaignCriterion?: string;
  adGroupBidModifier?: string;
  sharedSet?: string;
  campaignSharedSet?: string;
  asset?: string;
  customerAsset?: string;
  campaignAsset?: string;
  adGroupAsset?: string;
  combinedAudience?: string;
  assetGroup?: string;
  assetSet?: string;
  campaignBudget?: string;
  campaignAssetSet?: string;
}
