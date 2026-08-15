// @generated
// fingerprint: sha256:0c1ce04cb2fc0dbe58ed963be7c0fd8f53831999e677af29d1a31467ddf3e750
// DO NOT EDIT: generated file; changes will be overwritten.
import type { HotelReconciliationStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.HotelReconciliation. Do not edit by hand.
export interface HotelReconciliation {
  resourceName?: string;
  commissionId?: string;
  orderId?: string;
  campaign?: string;
  hotelCenterId?: string;
  hotelId?: string;
  checkInDate?: string;
  checkOutDate?: string;
  reconciledValueMicros?: string;
  billed?: boolean;
  status?: HotelReconciliationStatus;
}
