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
