// @generated
// fingerprint: sha256:226e103b84998f880388e396ac64371ce9cca06bab73e0cdb4bdd385a04157bb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { KeywordPlanGeoTarget, KeywordPlanNetwork } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.KeywordPlanCampaign. Do not edit by hand.
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
