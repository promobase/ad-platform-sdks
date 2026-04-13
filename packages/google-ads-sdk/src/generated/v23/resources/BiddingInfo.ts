import type { BiddingStrategyType, TargetImpressionShareInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateRecommendationsRequest.BiddingInfo. Do not edit by hand.
export interface BiddingInfo {
  biddingStrategyType?: BiddingStrategyType;
  targetCpaMicros?: string;
  targetRoas?: number;
  targetImpressionShareInfo?: TargetImpressionShareInfo;
}
