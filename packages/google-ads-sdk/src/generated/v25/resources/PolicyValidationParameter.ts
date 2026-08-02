import type { PolicyViolationKey } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PolicyValidationParameter. Do not edit by hand.
export interface PolicyValidationParameter {
  ignorablePolicyTopics?: string[];
  exemptPolicyViolationKeys?: PolicyViolationKey[];
}
