// @generated
// fingerprint: sha256:af12fa9e86b911095a4e6bdd59c9df1dfbad4379ea1393eb56eb4b1b0b5e3f14
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BidModifierSource, DeviceInfo, HotelAdvanceBookingWindowInfo, HotelCheckInDateRangeInfo, HotelCheckInDayInfo, HotelDateSelectionTypeInfo, HotelLengthOfStayInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupBidModifier. Do not edit by hand.
export interface AdGroupBidModifier {
  resourceName?: string;
  adGroup?: string;
  criterionId?: string;
  bidModifier?: number;
  baseAdGroup?: string;
  bidModifierSource?: BidModifierSource;
  hotelDateSelectionType?: HotelDateSelectionTypeInfo;
  hotelAdvanceBookingWindow?: HotelAdvanceBookingWindowInfo;
  hotelLengthOfStay?: HotelLengthOfStayInfo;
  hotelCheckInDay?: HotelCheckInDayInfo;
  device?: DeviceInfo;
  hotelCheckInDateRange?: HotelCheckInDateRangeInfo;
}
