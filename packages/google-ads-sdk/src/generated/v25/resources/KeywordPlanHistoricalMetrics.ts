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
