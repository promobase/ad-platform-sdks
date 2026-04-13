import type { LocationGroupRadiusUnits } from "../index.ts";

// Generated from google.ads.googleads.v23.common.LocationGroupInfo. Do not edit by hand.
export interface LocationGroupInfo {
  geoTargetConstants?: string[];
  radius?: string;
  radiusUnits?: LocationGroupRadiusUnits;
  feedItemSets?: string[];
  enableCustomerLevelLocationAssetSet?: boolean;
  locationGroupAssetSets?: string[];
}
