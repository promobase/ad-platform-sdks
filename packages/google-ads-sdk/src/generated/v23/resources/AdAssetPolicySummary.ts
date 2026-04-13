import type { PolicyApprovalStatus, PolicyReviewStatus, PolicyTopicEntry } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AdAssetPolicySummary. Do not edit by hand.
export interface AdAssetPolicySummary {
  policyTopicEntries?: PolicyTopicEntry[];
  reviewStatus?: PolicyReviewStatus;
  approvalStatus?: PolicyApprovalStatus;
}
