import type { KeywordMatchType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.AdGroupKeywordSuggestion. Do not edit by hand.
export interface AdGroupKeywordSuggestion {
  keywordText?: string;
  suggestedKeywordText?: string;
  suggestedMatchType?: KeywordMatchType;
  suggestedAdGroup?: string;
  suggestedCampaign?: string;
}
