import type { LocationInfo, SampleChannel } from "../index.ts";

// Generated from google.ads.googleads.v25.common.LineupAttributeMetadata. Do not edit by hand.
export interface LineupAttributeMetadata {
  inventoryCountry?: LocationInfo;
  medianMonthlyInventory?: string;
  channelCountLowerBound?: string;
  channelCountUpperBound?: string;
  sampleChannels?: SampleChannel[];
}
