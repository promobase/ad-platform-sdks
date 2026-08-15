// @generated
// fingerprint: sha256:2282840e72e03a1c74f02ca7638362c4997fc822c50ee09a4ba7186b3e2eab45
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingChannelType, Device, SeasonalityEventScope, SeasonalityEventStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.BiddingSeasonalityAdjustment. Do not edit by hand.
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
