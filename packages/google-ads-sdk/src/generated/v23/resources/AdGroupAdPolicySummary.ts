import type { PolicyApprovalStatus, PolicyReviewStatus, PolicyTopicEntry } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupAdPolicySummary. Do not edit by hand.
export interface AdGroupAdPolicySummary {
  policyTopicEntries?: PolicyTopicEntry[];
  reviewStatus?: PolicyReviewStatus;
  approvalStatus?: PolicyApprovalStatus;
}
