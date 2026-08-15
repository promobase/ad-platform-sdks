// @generated
// fingerprint: sha256:fd128349f419d037a86725121b28e1b189e02b340ae285ee2e1e837f35338f21
// DO NOT EDIT: generated file; changes will be overwritten.
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
