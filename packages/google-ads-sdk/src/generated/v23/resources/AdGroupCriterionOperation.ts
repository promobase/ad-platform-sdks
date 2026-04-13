import type { AdGroupCriterion, PolicyViolationKey } from "../index.ts";

// Generated from google.ads.googleads.v23.services.AdGroupCriterionOperation. Do not edit by hand.
export interface AdGroupCriterionOperation {
  updateMask?: string;
  exemptPolicyViolationKeys?: PolicyViolationKey[];
  create?: AdGroupCriterion;
  update?: AdGroupCriterion;
  remove?: string;
}
