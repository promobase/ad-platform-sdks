// @generated
// fingerprint: sha256:d111e045629db9ff746caff8014a8edfb4d386105c38a112a0ae6cdd21f0be3c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { EventOccurrenceRange, RevenueRange } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event. Do not edit by hand.
export interface Event {
  mappedEventName?: string;
  currencyCode?: string;
  eventRevenueRange?: RevenueRange;
  eventRevenueValue?: number;
  eventOccurrenceRange?: EventOccurrenceRange;
  eventCounter?: string;
}
