// @generated
// fingerprint: sha256:3e720f0e2ee6d23058e8989a3886f53f1a5aaa4805fc1c4a0e8ac99056c9bf4b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetSetStatus, AssetSetType, BusinessProfileLocationGroup, ChainLocationGroup, HotelPropertyData, LocationSet, MerchantCenterFeed } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AssetSet. Do not edit by hand.
export interface AssetSet {
  id?: string;
  resourceName?: string;
  name?: string;
  type?: AssetSetType;
  status?: AssetSetStatus;
  merchantCenterFeed?: MerchantCenterFeed;
  locationGroupParentAssetSetId?: string;
  hotelPropertyData?: HotelPropertyData;
  locationSet?: LocationSet;
  businessProfileLocationGroup?: BusinessProfileLocationGroup;
  chainLocationGroup?: ChainLocationGroup;
}
