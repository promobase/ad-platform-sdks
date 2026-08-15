// @generated
// fingerprint: sha256:f654e922ba55dea9fd571203109c90b2c3e0159a423c5318e3d529626b09c580
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, AudienceInsightsDimension, LocationInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ListAudienceInsightsAttributesRequest. Do not edit by hand.
export interface ListAudienceInsightsAttributesRequest {
  customerId?: string;
  dimensions?: AudienceInsightsDimension[];
  queryText?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  locationCountryFilters?: LocationInfo[];
  youtubeReachLocation?: LocationInfo;
}
