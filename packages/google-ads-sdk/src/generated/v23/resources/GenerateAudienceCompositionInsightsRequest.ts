// @generated
// fingerprint: sha256:11384b9a46188058972a99c7ee006c4be948f2b22eca2288c5d08d6af939b2ba
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, AudienceInsightsDimension, InsightsAudience } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateAudienceCompositionInsightsRequest. Do not edit by hand.
export interface GenerateAudienceCompositionInsightsRequest {
  customerId?: string;
  audience?: InsightsAudience;
  baselineAudience?: InsightsAudience;
  dataMonth?: string;
  dimensions?: AudienceInsightsDimension[];
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
