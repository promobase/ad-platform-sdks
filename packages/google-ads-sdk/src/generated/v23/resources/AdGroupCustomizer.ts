import type { CustomizerValue, CustomizerValueStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupCustomizer. Do not edit by hand.
export interface AdGroupCustomizer {
  resourceName?: string;
  adGroup?: string;
  customizerAttribute?: string;
  status?: CustomizerValueStatus;
  value?: CustomizerValue;
}
