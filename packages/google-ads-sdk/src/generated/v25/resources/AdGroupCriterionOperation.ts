// @generated
// fingerprint: sha256:b54234f3c34bce7ad03bd5fa1ad4e0e4ed7dd9f7efaa9b4d4cbef62405b3e689
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupCriterion, PolicyViolationKey } from "../index.ts";

// Generated from google.ads.googleads.v25.services.AdGroupCriterionOperation. Do not edit by hand.
export interface AdGroupCriterionOperation {
  updateMask?: string;
  exemptPolicyViolationKeys?: PolicyViolationKey[];
  create?: AdGroupCriterion;
  update?: AdGroupCriterion;
  remove?: string;
}
