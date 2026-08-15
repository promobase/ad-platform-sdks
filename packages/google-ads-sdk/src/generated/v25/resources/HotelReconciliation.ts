// @generated
// fingerprint: sha256:fddbf9d1945ad8a6720e5449bac2d2839d8015a20c2c3691862d8abb9cdac5b4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { HotelReconciliationStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.HotelReconciliation. Do not edit by hand.
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
