// @generated
// fingerprint: sha256:0c468d1415bdead1076d59fdf3d827f08c4d1ae21e23a87e14561b22a88959e7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingChannelType, Device, SeasonalityEventScope, SeasonalityEventStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.BiddingDataExclusion. Do not edit by hand.
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
