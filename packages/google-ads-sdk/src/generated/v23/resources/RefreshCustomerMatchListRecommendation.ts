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
