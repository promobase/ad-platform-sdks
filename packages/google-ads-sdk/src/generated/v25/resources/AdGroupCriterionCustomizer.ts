import type { CustomizerValue, CustomizerValueStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AdGroupCriterionCustomizer. Do not edit by hand.
export interface AdGroupCriterionCustomizer {
  resourceName?: string;
  adGroupCriterion?: string;
  customizerAttribute?: string;
  status?: CustomizerValueStatus;
  value?: CustomizerValue;
}
