// @generated
// fingerprint: sha256:171e75039fbf1d2077be8a6d0262eaf44bb92a42923efd8df37eea6d804d0800
// DO NOT EDIT: generated file; changes will be overwritten.
import type { Ad, AdGroupAdAssetAutomationSetting, AdGroupAdPolicySummary, AdGroupAdPrimaryStatus, AdGroupAdPrimaryStatusReason, AdGroupAdStatus, AdStrength } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupAd. Do not edit by hand.
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
