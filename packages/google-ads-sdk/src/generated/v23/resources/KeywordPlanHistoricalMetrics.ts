// @generated
// fingerprint: sha256:9a02546623a082964c53f1f1d62c32bca75244862de4732c257190ff1f4ebe4d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanCompetitionLevel, MonthlySearchVolume } from "../index.ts";

// Generated from google.ads.googleads.v23.common.KeywordPlanHistoricalMetrics. Do not edit by hand.
export interface KeywordPlanHistoricalMetrics {
  avgMonthlySearches?: string;
  monthlySearchVolumes?: MonthlySearchVolume[];
  competition?: KeywordPlanCompetitionLevel;
  competitionIndex?: string;
  lowTopOfPageBidMicros?: string;
  highTopOfPageBidMicros?: string;
  averageCpcMicros?: string;
}
