import type { TrackingCodePageFormat, TrackingCodeType } from "../index.ts";

// Generated from google.ads.googleads.v23.common.TagSnippet. Do not edit by hand.
export interface TagSnippet {
  type?: TrackingCodeType;
  pageFormat?: TrackingCodePageFormat;
  globalSiteTag?: string;
  eventSnippet?: string;
}
