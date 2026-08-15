// @generated
// fingerprint: sha256:23d828d10205d5dd61b9d40eb90df316aac8505d4a2814f65e0fb4fa80e53755
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccountInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Recommendation.RefreshCustomerMatchListRecommendation. Do not edit by hand.
export interface RefreshCustomerMatchListRecommendation {
  userListId?: string;
  userListName?: string;
  daysSinceLastRefresh?: string;
  topSpendingAccount?: AccountInfo[];
  targetingAccountsCount?: string;
  ownerAccount?: AccountInfo;
}
