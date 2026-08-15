// @generated
// fingerprint: sha256:1efdc16707e23a75bb7ee9b4c5a31ba666822ecf3395c3440a3d0ed7907d1e16
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, InsightsAudienceDefinition, InsightsAudienceDescription } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateSuggestedTargetingInsightsRequest. Do not edit by hand.
export interface GenerateSuggestedTargetingInsightsRequest {
  customerId?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  audienceDefinition?: InsightsAudienceDefinition;
  audienceDescription?: InsightsAudienceDescription;
}
