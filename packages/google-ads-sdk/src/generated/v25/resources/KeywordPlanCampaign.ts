import type { KeywordPlanGeoTarget, KeywordPlanNetwork } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.KeywordPlanCampaign. Do not edit by hand.
export interface KeywordPlanCampaign {
  resourceName?: string;
  keywordPlan?: string;
  id?: string;
  name?: string;
  languageConstants?: string[];
  keywordPlanNetwork?: KeywordPlanNetwork;
  cpcBidMicros?: string;
  geoTargets?: KeywordPlanGeoTarget[];
}
