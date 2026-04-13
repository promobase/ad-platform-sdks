import type { PolicyApprovalStatus, PolicyReviewStatus, PolicyTopicEntry } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PolicySummary. Do not edit by hand.
export interface PolicySummary {
  policyTopicEntries?: PolicyTopicEntry[];
  reviewStatus?: PolicyReviewStatus;
  approvalStatus?: PolicyApprovalStatus;
}
