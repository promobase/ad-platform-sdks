// @generated
// fingerprint: sha256:a9c764a5d300bb45db2a1e9a8ec5739e6902d5c600ba0f474199d5019f827299
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, InsightsAudience } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateInsightsFinderReportRequest. Do not edit by hand.
export interface GenerateInsightsFinderReportRequest {
  customerId?: string;
  baselineAudience?: InsightsAudience;
  specificAudience?: InsightsAudience;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
