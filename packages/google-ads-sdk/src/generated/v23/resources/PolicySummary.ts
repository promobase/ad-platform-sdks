// @generated
// fingerprint: sha256:e64b87403ccd998630f5fae7d52780c889a7f9a4b674d2dd0977b911ecf6a515
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PolicyApprovalStatus, PolicyReviewStatus, PolicyTopicEntry } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PolicySummary. Do not edit by hand.
export interface PolicySummary {
  policyTopicEntries?: PolicyTopicEntry[];
  reviewStatus?: PolicyReviewStatus;
  approvalStatus?: PolicyApprovalStatus;
}
