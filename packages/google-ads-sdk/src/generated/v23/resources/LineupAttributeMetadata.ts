// @generated
// fingerprint: sha256:1881a86012612a25693a0211ab2a5e3e6246766c9c558e0872eede9d6304f201
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LocationInfo, SampleChannel } from "../index.ts";

// Generated from google.ads.googleads.v23.common.LineupAttributeMetadata. Do not edit by hand.
export interface LineupAttributeMetadata {
  inventoryCountry?: LocationInfo;
  medianMonthlyInventory?: string;
  channelCountLowerBound?: string;
  channelCountUpperBound?: string;
  sampleChannels?: SampleChannel[];
}
