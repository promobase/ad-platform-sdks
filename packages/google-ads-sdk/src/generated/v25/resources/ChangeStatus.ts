// @generated
// fingerprint: sha256:8a797c7981a94446509ee8c2faa36d59f69ac5e1e59934246be01e152c64a16a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ChangeStatusOperation, ChangeStatusResourceType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ChangeStatus. Do not edit by hand.
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
