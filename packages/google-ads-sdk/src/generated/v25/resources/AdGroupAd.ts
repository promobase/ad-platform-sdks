// @generated
// fingerprint: sha256:9d5e8a74e8af90aab68ff708437b542b849147858cdf0cc832aa59114441e3ad
// DO NOT EDIT: generated file; changes will be overwritten.
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
