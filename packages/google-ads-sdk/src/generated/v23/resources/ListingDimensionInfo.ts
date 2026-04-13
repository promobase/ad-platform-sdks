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
