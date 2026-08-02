import type { KeywordMatchType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.KeywordPlanAdGroupKeyword. Do not edit by hand.
export interface KeywordPlanAdGroupKeyword {
  resourceName?: string;
  keywordPlanAdGroup?: string;
  id?: string;
  text?: string;
  matchType?: KeywordMatchType;
  cpcBidMicros?: string;
  negative?: boolean;
}
