// @generated
// fingerprint: sha256:9c231204fe3072bcd6f18124f092e679dc699a1dc2ce0f5f8d400430c01dc3c7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, AudienceInsightsDimension, InsightsAudience } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateAudienceCompositionInsightsRequest. Do not edit by hand.
export interface GenerateAudienceCompositionInsightsRequest {
  customerId?: string;
  audience?: InsightsAudience;
  baselineAudience?: InsightsAudience;
  dataMonth?: string;
  dimensions?: AudienceInsightsDimension[];
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
