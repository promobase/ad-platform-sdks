// @generated
// fingerprint: sha256:586d837f6792cd009b1c469b34d19003f0213cfb03641142e2b3623fa5344ea7
// DO NOT EDIT: generated file; changes will be overwritten.
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
