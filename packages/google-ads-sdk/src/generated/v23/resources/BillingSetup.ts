import type { BillingSetupStatus, PaymentsAccountInfo, TimeType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.BillingSetup. Do not edit by hand.
export interface BillingSetup {
  resourceName?: string;
  id?: string;
  status?: BillingSetupStatus;
  paymentsAccount?: string;
  paymentsAccountInfo?: PaymentsAccountInfo;
  startDateTime?: string;
  startTimeType?: TimeType;
  endDateTime?: string;
  endTimeType?: TimeType;
}
