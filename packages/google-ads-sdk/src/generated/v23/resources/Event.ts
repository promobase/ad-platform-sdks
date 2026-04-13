import type { EventOccurrenceRange, RevenueRange } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event. Do not edit by hand.
export interface Event {
  mappedEventName?: string;
  currencyCode?: string;
  eventRevenueRange?: RevenueRange;
  eventRevenueValue?: number;
  eventOccurrenceRange?: EventOccurrenceRange;
  eventCounter?: string;
}
