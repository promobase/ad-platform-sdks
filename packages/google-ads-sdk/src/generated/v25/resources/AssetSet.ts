import type { AssetSetStatus, AssetSetType, BusinessProfileLocationGroup, ChainLocationGroup, HotelPropertyData, LocationSet, MerchantCenterFeed, TravelFeedData } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AssetSet. Do not edit by hand.
export interface AssetSet {
  id?: string;
  resourceName?: string;
  name?: string;
  type?: AssetSetType;
  status?: AssetSetStatus;
  merchantCenterFeed?: MerchantCenterFeed;
  locationGroupParentAssetSetId?: string;
  hotelPropertyData?: HotelPropertyData;
  travelFeedData?: TravelFeedData;
  locationSet?: LocationSet;
  businessProfileLocationGroup?: BusinessProfileLocationGroup;
  chainLocationGroup?: ChainLocationGroup;
}
