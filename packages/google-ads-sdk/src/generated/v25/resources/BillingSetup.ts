// @generated
// fingerprint: sha256:a1437f42f9dd1a99e48b062bdfcc7194a56574330efbbe9763d0c0b549629273
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BillingSetupStatus, PaymentsAccountInfo, TimeType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.BillingSetup. Do not edit by hand.
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
