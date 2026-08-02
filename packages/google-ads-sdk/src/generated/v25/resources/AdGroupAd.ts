import type { Ad, AdGroupAdAssetAutomationSetting, AdGroupAdPolicySummary, AdGroupAdPrimaryStatus, AdGroupAdPrimaryStatusReason, AdGroupAdStatus, AdStrength } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AdGroupAd. Do not edit by hand.
export interface AdGroupAd {
  resourceName?: string;
  status?: AdGroupAdStatus;
  adGroup?: string;
  ad?: Ad;
  startDateTime?: string;
  endDateTime?: string;
  policySummary?: AdGroupAdPolicySummary;
  adStrength?: AdStrength;
  actionItems?: string[];
  labels?: string[];
  primaryStatus?: AdGroupAdPrimaryStatus;
  primaryStatusReasons?: AdGroupAdPrimaryStatusReason[];
  adGroupAdAssetAutomationSettings?: AdGroupAdAssetAutomationSetting[];
}
