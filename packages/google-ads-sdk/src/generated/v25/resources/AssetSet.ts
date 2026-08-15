// @generated
// fingerprint: sha256:409748385f9907595b17b261a166b06749d796c47ad381b586db5c1874701183
// DO NOT EDIT: generated file; changes will be overwritten.
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
