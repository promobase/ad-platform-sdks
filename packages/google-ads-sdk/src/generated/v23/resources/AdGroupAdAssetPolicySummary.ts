import type { PolicyApprovalStatus, PolicyReviewStatus, PolicyTopicEntry } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupAdAssetPolicySummary. Do not edit by hand.
export interface AdGroupAdAssetPolicySummary {
  policyTopicEntries?: PolicyTopicEntry[];
  reviewStatus?: PolicyReviewStatus;
  approvalStatus?: PolicyApprovalStatus;
}
