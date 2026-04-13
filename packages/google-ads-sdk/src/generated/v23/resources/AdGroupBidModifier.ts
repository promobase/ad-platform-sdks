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
