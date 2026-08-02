import type { CustomerUserAccessInvitationReview, CustomerUserAccessReview, MultiPartyAuthOperationType, MultiPartyAuthReviewStatus, MultiPartyAuthReviewTargetResource } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.MultiPartyAuthReview. Do not edit by hand.
export interface MultiPartyAuthReview {
  resourceName?: string;
  multiPartyAuthReviewId?: string;
  creationDateTime?: string;
  reviewStatus?: MultiPartyAuthReviewStatus;
  approvalDateTime?: string;
  justification?: string;
  requestUserEmail?: string;
  operationType?: MultiPartyAuthOperationType;
  targetResource?: MultiPartyAuthReviewTargetResource;
  customerUserAccessReview?: CustomerUserAccessReview;
  customerUserAccessInvitationReview?: CustomerUserAccessInvitationReview;
}
