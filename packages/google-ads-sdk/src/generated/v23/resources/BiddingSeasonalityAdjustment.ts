import type { AdvertisingChannelType, Device, SeasonalityEventScope, SeasonalityEventStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.BiddingSeasonalityAdjustment. Do not edit by hand.
export interface BiddingSeasonalityAdjustment {
  resourceName?: string;
  seasonalityAdjustmentId?: string;
  scope?: SeasonalityEventScope;
  status?: SeasonalityEventStatus;
  startDateTime?: string;
  endDateTime?: string;
  name?: string;
  description?: string;
  devices?: Device[];
  conversionRateModifier?: number;
  campaigns?: string[];
  advertisingChannelTypes?: AdvertisingChannelType[];
}
