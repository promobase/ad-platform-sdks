import type { AdGroupAd, PolicyValidationParameter } from "../index.ts";

// Generated from google.ads.googleads.v23.services.AdGroupAdOperation. Do not edit by hand.
export interface AdGroupAdOperation {
  updateMask?: string;
  policyValidationParameter?: PolicyValidationParameter;
  create?: AdGroupAd;
  update?: AdGroupAd;
  remove?: string;
}
