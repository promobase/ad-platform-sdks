import type { AdvertisingChannelSubType, AdvertisingChannelType, CriterionCategoryChannelAvailabilityMode } from "../index.ts";

// Generated from google.ads.googleads.v23.common.CriterionCategoryChannelAvailability. Do not edit by hand.
export interface CriterionCategoryChannelAvailability {
  availabilityMode?: CriterionCategoryChannelAvailabilityMode;
  advertisingChannelType?: AdvertisingChannelType;
  advertisingChannelSubType?: AdvertisingChannelSubType[];
  includeDefaultChannelSubType?: boolean;
}
