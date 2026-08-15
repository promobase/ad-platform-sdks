// @generated
// fingerprint: sha256:c89f0583d66f52ef08b57f2fc1f0c658c24f96ef0b913f53afa233547b259ad3
// DO NOT EDIT: generated file; changes will be overwritten.
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
