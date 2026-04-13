import type { PolicyViolationKey } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PolicyValidationParameter. Do not edit by hand.
export interface PolicyValidationParameter {
  ignorablePolicyTopics?: string[];
  exemptPolicyViolationKeys?: PolicyViolationKey[];
}
