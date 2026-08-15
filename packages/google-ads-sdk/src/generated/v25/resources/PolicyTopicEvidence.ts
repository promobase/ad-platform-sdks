// @generated
// fingerprint: sha256:f93b6b92e997a007d30c6dff36c3c5611077028c215e82e2931401b075686a3f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { DestinationMismatch, DestinationNotWorking, DestinationTextList, TextList, WebsiteList } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PolicyTopicEvidence. Do not edit by hand.
export interface PolicyTopicEvidence {
  websiteList?: WebsiteList;
  textList?: TextList;
  languageCode?: string;
  destinationTextList?: DestinationTextList;
  destinationMismatch?: DestinationMismatch;
  destinationNotWorking?: DestinationNotWorking;
}
