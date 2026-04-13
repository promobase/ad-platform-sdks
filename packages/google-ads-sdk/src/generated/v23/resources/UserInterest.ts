import type { CriterionCategoryAvailability, UserInterestTaxonomyType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.UserInterest. Do not edit by hand.
export interface UserInterest {
  resourceName?: string;
  taxonomyType?: UserInterestTaxonomyType;
  userInterestId?: string;
  name?: string;
  userInterestParent?: string;
  launchedToAll?: boolean;
  availabilities?: CriterionCategoryAvailability[];
}
