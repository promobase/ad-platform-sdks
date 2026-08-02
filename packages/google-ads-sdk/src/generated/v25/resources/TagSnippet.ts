import type { TrackingCodePageFormat, TrackingCodeType } from "../index.ts";

// Generated from google.ads.googleads.v25.common.TagSnippet. Do not edit by hand.
export interface TagSnippet {
  type?: TrackingCodeType;
  pageFormat?: TrackingCodePageFormat;
  globalSiteTag?: string;
  eventSnippet?: string;
}
