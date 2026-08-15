// @generated
// fingerprint: sha256:607e1d96ad7efac674f9975a5031328e86c82eb59c5caf0f0d2a8c7255fb9b06
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, InsightsAudienceDefinition, InsightsAudienceDescription } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateSuggestedTargetingInsightsRequest. Do not edit by hand.
export interface GenerateSuggestedTargetingInsightsRequest {
  customerId?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  audienceDefinition?: InsightsAudienceDefinition;
  audienceDescription?: InsightsAudienceDescription;
}
