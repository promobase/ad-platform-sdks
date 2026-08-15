// @generated
// fingerprint: sha256:de70a87fc28fad0eac746863c8b098f82e413c5267c83461f81fe1b40cbabd88
// DO NOT EDIT: generated file; changes will be overwritten.
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
