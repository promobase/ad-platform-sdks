// @generated
// fingerprint: sha256:5db7f87b763989ea6ae625b780f1bb02d395b760a557c4c854f38764f019e992
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, AudienceInsightsAttribute, AudienceInsightsDimension, LocationInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateAudienceOverlapInsightsRequest. Do not edit by hand.
export interface GenerateAudienceOverlapInsightsRequest {
  customerId?: string;
  countryLocation?: LocationInfo;
  primaryAttribute?: AudienceInsightsAttribute;
  dimensions?: AudienceInsightsDimension[];
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
