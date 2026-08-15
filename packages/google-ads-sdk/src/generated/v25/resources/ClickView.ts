// @generated
// fingerprint: sha256:ccd112b8d64d45c2e5b35c2bd1eb2804c8355a642458b6206c84cd6be08b3b12
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ClickLocation, KeywordInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ClickView. Do not edit by hand.
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
