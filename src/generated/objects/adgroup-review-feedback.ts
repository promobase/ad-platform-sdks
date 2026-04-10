import type { AdgroupPlacementSpecificReviewFeedbackFields } from "./adgroup-placement-specific-review-feedback.ts";

export interface AdgroupReviewFeedbackFields {
  global: Record<string, string>;
  placement_specific: AdgroupPlacementSpecificReviewFeedbackFields;
}

