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
