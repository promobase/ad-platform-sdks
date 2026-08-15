// @generated
// fingerprint: sha256:17d8c121539a4a53638bde0b1dc9cd67fa53c107453cd196572f42832d39085e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccountInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Recommendation.RefreshCustomerMatchListRecommendation. Do not edit by hand.
export interface RefreshCustomerMatchListRecommendation {
  userListId?: string;
  userListName?: string;
  daysSinceLastRefresh?: string;
  topSpendingAccount?: AccountInfo[];
  targetingAccountsCount?: string;
  ownerAccount?: AccountInfo;
}
