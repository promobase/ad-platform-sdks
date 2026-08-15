// @generated
// fingerprint: sha256:7fc3c3ab174d690e574a1f34ac82dadf95a59c753f000e0d006f1ee51d43531f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingChannelSubType, AdvertisingChannelType, CriterionCategoryChannelAvailabilityMode } from "../index.ts";

// Generated from google.ads.googleads.v23.common.CriterionCategoryChannelAvailability. Do not edit by hand.
export interface CriterionCategoryChannelAvailability {
  availabilityMode?: CriterionCategoryChannelAvailabilityMode;
  advertisingChannelType?: AdvertisingChannelType;
  advertisingChannelSubType?: AdvertisingChannelSubType[];
  includeDefaultChannelSubType?: boolean;
}
