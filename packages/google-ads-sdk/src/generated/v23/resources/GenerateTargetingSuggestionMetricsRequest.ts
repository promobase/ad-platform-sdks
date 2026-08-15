// @generated
// fingerprint: sha256:da7e80cd36ccc99a23da17316613a5ae914b6f27a480712fb76803bce51827ec
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, InsightsAudience } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateTargetingSuggestionMetricsRequest. Do not edit by hand.
export interface GenerateTargetingSuggestionMetricsRequest {
  customerId?: string;
  audiences?: InsightsAudience[];
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
