import type { PolicyApprovalStatus, PolicyReviewStatus, PolicyTopicEntry } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AssetPolicySummary. Do not edit by hand.
export interface AssetPolicySummary {
  policyTopicEntries?: PolicyTopicEntry[];
  reviewStatus?: PolicyReviewStatus;
  approvalStatus?: PolicyApprovalStatus;
}
