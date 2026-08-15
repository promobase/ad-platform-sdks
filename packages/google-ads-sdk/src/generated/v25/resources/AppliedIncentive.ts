// @generated
// fingerprint: sha256:c149ff7c8034a25ef42f64517d99041c45479e37ce69b050b043d7aa3674573c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { IncentiveState } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AppliedIncentive. Do not edit by hand.
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
