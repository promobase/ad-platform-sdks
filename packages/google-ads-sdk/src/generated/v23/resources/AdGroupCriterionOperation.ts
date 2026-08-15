// @generated
// fingerprint: sha256:2a089ebe8c38dfc5caf86fd5257a3759edadea3652e60ed8a8769480420f43b5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterion, PolicyViolationKey } from "../index.ts";

// Generated from google.ads.googleads.v23.services.AdGroupCriterionOperation. Do not edit by hand.
export interface AdGroupCriterionOperation {
  updateMask?: string;
  exemptPolicyViolationKeys?: PolicyViolationKey[];
  create?: AdGroupCriterion;
  update?: AdGroupCriterion;
  remove?: string;
}
