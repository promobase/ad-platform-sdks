import type { Ad, AdGroup, AdGroupAd, AdGroupAsset, AdGroupBidModifier, AdGroupCriterion, Asset, AssetSet, AssetSetAsset, Campaign, CampaignAsset, CampaignAssetSet, CampaignBudget, CampaignCriterion, CustomerAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ChangeEvent.ChangedResource. Do not edit by hand.
export interface ChangedResource {
  ad?: Ad;
  adGroup?: AdGroup;
  adGroupCriterion?: AdGroupCriterion;
  campaign?: Campaign;
  campaignBudget?: CampaignBudget;
  adGroupBidModifier?: AdGroupBidModifier;
  campaignCriterion?: CampaignCriterion;
  adGroupAd?: AdGroupAd;
  asset?: Asset;
  customerAsset?: CustomerAsset;
  campaignAsset?: CampaignAsset;
  adGroupAsset?: AdGroupAsset;
  assetSet?: AssetSet;
  assetSetAsset?: AssetSetAsset;
  campaignAssetSet?: CampaignAssetSet;
}
