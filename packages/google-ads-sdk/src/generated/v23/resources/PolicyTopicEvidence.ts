// @generated
// fingerprint: sha256:0bcfb9e2800f9562af349244d63370088bb1b4e460e48e8128e2a8b0fd460bc4
// DO NOT EDIT: generated file; changes will be overwritten.
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
