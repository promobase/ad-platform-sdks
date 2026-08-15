// @generated
// fingerprint: sha256:dd599ca74feed9470ba6b6be8b46e1198c01f11ec1d5f438bda1768cb0fdb305
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, AudienceInsightsAttribute, AudienceInsightsDimension, LocationInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateAudienceOverlapInsightsRequest. Do not edit by hand.
export interface GenerateAudienceOverlapInsightsRequest {
  customerId?: string;
  countryLocation?: LocationInfo;
  primaryAttribute?: AudienceInsightsAttribute;
  dimensions?: AudienceInsightsDimension[];
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
}
