// @generated
// fingerprint: sha256:293eb3d308bad49ed50a6f3c0d05b9a3dc3db6e697b45f89802d37a32773a760
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ActivityCityInfo, ActivityCountryInfo, ActivityIdInfo, ActivityRatingInfo, ActivityStateInfo, HotelCityInfo, HotelClassInfo, HotelCountryRegionInfo, HotelIdInfo, HotelStateInfo, ProductBrandInfo, ProductCategoryInfo, ProductChannelExclusivityInfo, ProductChannelInfo, ProductConditionInfo, ProductCustomAttributeInfo, ProductGroupingInfo, ProductItemIdInfo, ProductLabelsInfo, ProductLegacyConditionInfo, ProductTypeFullInfo, ProductTypeInfo, UnknownListingDimensionInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.common.ListingDimensionInfo. Do not edit by hand.
export interface ListingDimensionInfo {
  hotelId?: HotelIdInfo;
  hotelClass?: HotelClassInfo;
  hotelCountryRegion?: HotelCountryRegionInfo;
  hotelState?: HotelStateInfo;
  hotelCity?: HotelCityInfo;
  productCategory?: ProductCategoryInfo;
  productBrand?: ProductBrandInfo;
  productChannel?: ProductChannelInfo;
  productChannelExclusivity?: ProductChannelExclusivityInfo;
  productCondition?: ProductConditionInfo;
  productCustomAttribute?: ProductCustomAttributeInfo;
  productItemId?: ProductItemIdInfo;
  productType?: ProductTypeInfo;
  productGrouping?: ProductGroupingInfo;
  productLabels?: ProductLabelsInfo;
  productLegacyCondition?: ProductLegacyConditionInfo;
  productTypeFull?: ProductTypeFullInfo;
  activityId?: ActivityIdInfo;
  activityRating?: ActivityRatingInfo;
  activityCountry?: ActivityCountryInfo;
  activityState?: ActivityStateInfo;
  activityCity?: ActivityCityInfo;
  unknownListingDimension?: UnknownListingDimensionInfo;
}
