// @generated
// fingerprint: sha256:f68765f1ed882f111513c654c61bbcd96c5ba4fbffbf5a98832442a4c2c5c65a
// DO NOT EDIT: generated file; changes will be overwritten.
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
