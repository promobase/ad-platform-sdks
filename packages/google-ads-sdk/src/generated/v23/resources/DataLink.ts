// @generated
// fingerprint: sha256:f11f26b6b56c90596170454378726ef8f10a6ddb8bc1b221ac57cfb826a532e7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { DataLinkStatus, DataLinkType, YoutubeVideoIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.DataLink. Do not edit by hand.
export interface DataLink {
  resourceName?: string;
  productLinkId?: string;
  dataLinkId?: string;
  type?: DataLinkType;
  status?: DataLinkStatus;
  youtubeVideo?: YoutubeVideoIdentifier;
}
