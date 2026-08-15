// @generated
// fingerprint: sha256:d1d79ee80bb08dd2f2c64c3bda77d00728a32d8756bd523250382e352bff80e4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, AudienceInsightsDimension, KnowledgeGraphEntitySearchOptions, LocationInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ListAudienceInsightsAttributesRequest. Do not edit by hand.
export interface ListAudienceInsightsAttributesRequest {
  customerId?: string;
  dimensions?: AudienceInsightsDimension[];
  queryText?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  locationCountryFilters?: LocationInfo[];
  youtubeReachLocation?: LocationInfo;
  knowledgeGraphEntitySearchOptions?: KnowledgeGraphEntitySearchOptions;
}
