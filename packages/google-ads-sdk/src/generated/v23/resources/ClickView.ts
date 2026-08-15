// @generated
// fingerprint: sha256:f67a5cc6b6997331c4d34b2d1f24e95225247728bbf7f9f225af0327c4b5c75b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ClickLocation, KeywordInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ClickView. Do not edit by hand.
export interface ClickView {
  resourceName?: string;
  gclid?: string;
  areaOfInterest?: ClickLocation;
  locationOfPresence?: ClickLocation;
  pageNumber?: string;
  adGroupAd?: string;
  campaignLocationTarget?: string;
  userList?: string;
  keyword?: string;
  keywordInfo?: KeywordInfo;
}
