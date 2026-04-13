import type { ConversionTrackingStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ConversionTrackingSetting. Do not edit by hand.
export interface ConversionTrackingSetting {
  conversionTrackingId?: string;
  crossAccountConversionTrackingId?: string;
  acceptedCustomerDataTerms?: boolean;
  conversionTrackingStatus?: ConversionTrackingStatus;
  enhancedConversionsForLeadsEnabled?: boolean;
  googleAdsConversionCustomer?: string;
}
