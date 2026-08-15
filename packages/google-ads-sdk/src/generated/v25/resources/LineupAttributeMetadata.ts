// @generated
// fingerprint: sha256:39f0defb42ad55be3f3cd541afee8afd72d85bc09e8d81fa74d736137373dfce
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LocationInfo, SampleChannel } from "../index.ts";

// Generated from google.ads.googleads.v25.common.LineupAttributeMetadata. Do not edit by hand.
export interface LineupAttributeMetadata {
  inventoryCountry?: LocationInfo;
  medianMonthlyInventory?: string;
  channelCountLowerBound?: string;
  channelCountUpperBound?: string;
  sampleChannels?: SampleChannel[];
}
