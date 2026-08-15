// @generated
// fingerprint: sha256:c4ae37ec8335082a6f978c8e66530458b390a1a345b8ee0f1d0cf677ea2601c2
// DO NOT EDIT: generated file; changes will be overwritten.
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
