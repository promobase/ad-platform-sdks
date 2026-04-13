import type { AdvertisingChannelType, Device, SeasonalityEventScope, SeasonalityEventStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.BiddingDataExclusion. Do not edit by hand.
export interface BiddingDataExclusion {
  resourceName?: string;
  dataExclusionId?: string;
  scope?: SeasonalityEventScope;
  status?: SeasonalityEventStatus;
  startDateTime?: string;
  endDateTime?: string;
  name?: string;
  description?: string;
  devices?: Device[];
  campaigns?: string[];
  advertisingChannelTypes?: AdvertisingChannelType[];
}
