import type { KeywordInfo, SearchTerm } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Recommendation.KeywordRecommendation. Do not edit by hand.
export interface KeywordRecommendation {
  keyword?: KeywordInfo;
  searchTerms?: SearchTerm[];
  recommendedCpcBidMicros?: string;
}
