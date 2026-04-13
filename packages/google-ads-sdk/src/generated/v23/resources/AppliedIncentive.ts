import type { IncentiveState } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AppliedIncentive. Do not edit by hand.
export interface AppliedIncentive {
  resourceName?: string;
  couponCode?: string;
  incentiveState?: IncentiveState;
  redemptionDateTime?: string;
  fulfillmentExpirationDateTime?: string;
  rewardGrantDateTime?: string;
  rewardExpirationDateTime?: string;
  currencyCode?: string;
  rewardAmountMicros?: string;
  grantedAmountMicros?: string;
  requiredMinSpendMicros?: string;
  currentSpendTowardsFulfillmentMicros?: string;
  rewardBalanceRemainingMicros?: string;
}
