// @generated
// fingerprint: sha256:51bda55f8c7dea1f3bc42da94e4836ba399bdba1d1abddec8bbb973c5a5d2fa6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdType, AppAdInfo, AppEngagementAdInfo, AppPreRegistrationAdInfo, CustomParameter, DemandGenCarouselAdInfo, DemandGenMultiAssetAdInfo, DemandGenProductAdInfo, DemandGenVideoResponsiveAdInfo, Device, DisplayUploadAdInfo, ExpandedDynamicSearchAdInfo, ExpandedTextAdInfo, FinalAppUrl, HotelAdInfo, ImageAdInfo, LegacyAppInstallAdInfo, LegacyResponsiveDisplayAdInfo, LocalAdInfo, ResponsiveDisplayAdInfo, ResponsiveSearchAdInfo, ShoppingComparisonListingAdInfo, ShoppingProductAdInfo, ShoppingSmartAdInfo, SmartCampaignAdInfo, SyntheticContentInfo, SystemManagedResourceSource, TextAdInfo, TravelAdInfo, UrlCollection, VideoAdInfo, VideoResponsiveAdInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Ad. Do not edit by hand.
export interface Ad {
  resourceName?: string;
  id?: string;
  finalUrls?: string[];
  finalAppUrls?: FinalAppUrl[];
  finalMobileUrls?: string[];
  trackingUrlTemplate?: string;
  finalUrlSuffix?: string;
  urlCustomParameters?: CustomParameter[];
  displayUrl?: string;
  type?: AdType;
  addedByGoogleAds?: boolean;
  devicePreference?: Device;
  urlCollections?: UrlCollection[];
  name?: string;
  systemManagedResourceSource?: SystemManagedResourceSource;
  syntheticContentInfo?: SyntheticContentInfo;
  textAd?: TextAdInfo;
  expandedTextAd?: ExpandedTextAdInfo;
  expandedDynamicSearchAd?: ExpandedDynamicSearchAdInfo;
  hotelAd?: HotelAdInfo;
  shoppingSmartAd?: ShoppingSmartAdInfo;
  shoppingProductAd?: ShoppingProductAdInfo;
  imageAd?: ImageAdInfo;
  videoAd?: VideoAdInfo;
  videoResponsiveAd?: VideoResponsiveAdInfo;
  responsiveSearchAd?: ResponsiveSearchAdInfo;
  legacyResponsiveDisplayAd?: LegacyResponsiveDisplayAdInfo;
  appAd?: AppAdInfo;
  legacyAppInstallAd?: LegacyAppInstallAdInfo;
  responsiveDisplayAd?: ResponsiveDisplayAdInfo;
  localAd?: LocalAdInfo;
  displayUploadAd?: DisplayUploadAdInfo;
  appEngagementAd?: AppEngagementAdInfo;
  shoppingComparisonListingAd?: ShoppingComparisonListingAdInfo;
  smartCampaignAd?: SmartCampaignAdInfo;
  appPreRegistrationAd?: AppPreRegistrationAdInfo;
  demandGenMultiAssetAd?: DemandGenMultiAssetAdInfo;
  demandGenCarouselAd?: DemandGenCarouselAdInfo;
  demandGenVideoResponsiveAd?: DemandGenVideoResponsiveAdInfo;
  demandGenProductAd?: DemandGenProductAdInfo;
  travelAd?: TravelAdInfo;
}
