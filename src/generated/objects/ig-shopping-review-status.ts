import type { IGShoppingReviewStatusOnsiteEligibilityFields } from "./ig-shopping-review-status-onsite-eligibility.ts";
import type { IGShoppingReviewStatusReasonWithHelpMessageFields } from "./ig-shopping-review-status-reason-with-help-message.ts";

export interface IGShoppingReviewStatusFields {
  onsite_eligibility: IGShoppingReviewStatusOnsiteEligibilityFields;
  reasons: IGShoppingReviewStatusReasonWithHelpMessageFields[];
  status: string;
}

