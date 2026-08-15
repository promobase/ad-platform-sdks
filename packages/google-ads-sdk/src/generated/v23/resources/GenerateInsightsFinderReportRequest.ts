// @generated
// fingerprint: sha256:190a3a625beb8b26a7e6b594ad318e4b56bed964e54dd750d8c286d9152e2b63
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, InsightsAudience } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateInsightsFinderReportRequest. Do not edit by hand.
export interface GenerateInsightsFinderReportRequest {
  customerId?: string;
  baselineAudience?: InsightsAudience;
  specificAudience?: InsightsAudience;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
