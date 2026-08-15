// @generated
// fingerprint: sha256:dde603aa858dfc396899bc8df3ccb7dbbf51f56a7ba301ac385a9fa7c59ed7b0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CriterionCategoryAvailability, UserInterestTaxonomyType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.UserInterest. Do not edit by hand.
export interface UserInterest {
  resourceName?: string;
  taxonomyType?: UserInterestTaxonomyType;
  userInterestId?: string;
  name?: string;
  userInterestParent?: string;
  launchedToAll?: boolean;
  availabilities?: CriterionCategoryAvailability[];
}
