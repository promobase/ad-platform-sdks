import type { PolicyTopicConstraint, PolicyTopicEntryType, PolicyTopicEvidence } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PolicyTopicEntry. Do not edit by hand.
export interface PolicyTopicEntry {
  topic?: string;
  type?: PolicyTopicEntryType;
  evidences?: PolicyTopicEvidence[];
  constraints?: PolicyTopicConstraint[];
}
