import type { BusinessProfileLocationSet, ChainSet, LocationOwnershipType, MapsLocationSet } from "../index.ts";

// Generated from google.ads.googleads.v23.common.LocationSet. Do not edit by hand.
export interface LocationSet {
  locationOwnershipType?: LocationOwnershipType;
  businessProfileLocationSet?: BusinessProfileLocationSet;
  chainLocationSet?: ChainSet;
  mapsLocationSet?: MapsLocationSet;
}
