// @generated
// fingerprint: sha256:62b5a0f1d60b88f7c80da83329e96cbc2ae9f7930d8ad4fd11dd9c52d2c4f6e4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanCompetitionLevel, MonthlySearchVolume } from "../index.ts";

// Generated from google.ads.googleads.v25.common.KeywordPlanHistoricalMetrics. Do not edit by hand.
export interface KeywordPlanHistoricalMetrics {
  avgMonthlySearches?: string;
  monthlySearchVolumes?: MonthlySearchVolume[];
  competition?: KeywordPlanCompetitionLevel;
  competitionIndex?: string;
  lowTopOfPageBidMicros?: string;
  highTopOfPageBidMicros?: string;
  averageCpcMicros?: string;
}
