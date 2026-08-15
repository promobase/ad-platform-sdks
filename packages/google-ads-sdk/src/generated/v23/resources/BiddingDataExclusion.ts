// @generated
// fingerprint: sha256:2f59cee3884ea5b0398bd8b2fcd6182ecdd396b077d2f47885d816dcd0aaf58b
// DO NOT EDIT: generated file; changes will be overwritten.
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
