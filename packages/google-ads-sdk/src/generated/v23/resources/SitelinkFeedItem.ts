import type { CustomParameter } from "../index.ts";

// Generated from google.ads.googleads.v23.common.SitelinkFeedItem. Do not edit by hand.
export interface SitelinkFeedItem {
  linkText?: string;
  line1?: string;
  line2?: string;
  finalUrls?: string[];
  finalMobileUrls?: string[];
  trackingUrlTemplate?: string;
  urlCustomParameters?: CustomParameter[];
  finalUrlSuffix?: string;
}
