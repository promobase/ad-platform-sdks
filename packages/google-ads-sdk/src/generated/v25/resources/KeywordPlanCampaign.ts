// @generated
// fingerprint: sha256:d1d32ad8957a322b9cec7fb33012c920f74b1a0ac80f05a979fedbbdbee16be1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanGeoTarget, KeywordPlanNetwork } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.KeywordPlanCampaign. Do not edit by hand.
export interface KeywordPlanCampaign {
  resourceName?: string;
  keywordPlan?: string;
  id?: string;
  name?: string;
  languageConstants?: string[];
  keywordPlanNetwork?: KeywordPlanNetwork;
  cpcBidMicros?: string;
  geoTargets?: KeywordPlanGeoTarget[];
}
