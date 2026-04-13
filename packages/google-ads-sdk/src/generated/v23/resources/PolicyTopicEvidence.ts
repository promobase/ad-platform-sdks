import type { DestinationMismatch, DestinationNotWorking, DestinationTextList, TextList, WebsiteList } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PolicyTopicEvidence. Do not edit by hand.
export interface PolicyTopicEvidence {
  websiteList?: WebsiteList;
  textList?: TextList;
  languageCode?: string;
  destinationTextList?: DestinationTextList;
  destinationMismatch?: DestinationMismatch;
  destinationNotWorking?: DestinationNotWorking;
}
