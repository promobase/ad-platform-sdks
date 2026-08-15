// @generated
// fingerprint: sha256:feddbdc3659f562973b658423cd651461d439dbb61d3ce5b2de42f636bfe4c50
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingChannelSubType, AdvertisingChannelType, CriterionCategoryChannelAvailabilityMode } from "../index.ts";

// Generated from google.ads.googleads.v25.common.CriterionCategoryChannelAvailability. Do not edit by hand.
export interface CriterionCategoryChannelAvailability {
  availabilityMode?: CriterionCategoryChannelAvailabilityMode;
  advertisingChannelType?: AdvertisingChannelType;
  advertisingChannelSubType?: AdvertisingChannelSubType[];
  includeDefaultChannelSubType?: boolean;
}
