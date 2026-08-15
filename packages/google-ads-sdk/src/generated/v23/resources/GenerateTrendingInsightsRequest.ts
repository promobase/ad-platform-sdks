// @generated
// fingerprint: sha256:5f351f471798503ef590cdc4b9173910e9dfe26a25f0fc0048c1ab8f712075b9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdditionalApplicationInfo, LocationInfo, SearchAudience, SearchTopics } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateTrendingInsightsRequest. Do not edit by hand.
export interface GenerateTrendingInsightsRequest {
  customerId?: string;
  customerInsightsGroup?: string;
  insightsApplicationInfo?: AdditionalApplicationInfo;
  countryLocation?: LocationInfo;
  searchAudience?: SearchAudience;
  searchTopics?: SearchTopics;
}
