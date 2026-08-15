// @generated
// fingerprint: sha256:50829c8c9485e2a2f130994d7507a6718b0ebcb5d0614baca978ede761e97314
// DO NOT EDIT: generated file; changes will be overwritten.
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
