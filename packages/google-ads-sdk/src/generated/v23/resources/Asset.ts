import type { AppDeepLinkAsset, AssetFieldTypePolicySummary, AssetOrientation, AssetPolicySummary, AssetSource, AssetType, BookOnGoogleAsset, BusinessMessageAsset, CallAsset, CallToActionAsset, CalloutAsset, CustomParameter, DemandGenCarouselCardAsset, DynamicCustomAsset, DynamicEducationAsset, DynamicFlightsAsset, DynamicHotelsAndRentalsAsset, DynamicJobsAsset, DynamicLocalAsset, DynamicRealEstateAsset, DynamicTravelAsset, HotelCalloutAsset, HotelPropertyAsset, ImageAsset, LeadFormAsset, LocationAsset, MediaBundleAsset, MobileAppAsset, PageFeedAsset, PriceAsset, PromotionAsset, SitelinkAsset, StructuredSnippetAsset, TextAsset, YouTubeVideoListAsset, YoutubeVideoAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Asset. Do not edit by hand.
export interface Asset {
  resourceName?: string;
  id?: string;
  name?: string;
  type?: AssetType;
  finalUrls?: string[];
  finalMobileUrls?: string[];
  trackingUrlTemplate?: string;
  urlCustomParameters?: CustomParameter[];
  finalUrlSuffix?: string;
  source?: AssetSource;
  policySummary?: AssetPolicySummary;
  fieldTypePolicySummaries?: AssetFieldTypePolicySummary[];
  orientation?: AssetOrientation;
  youtubeVideoAsset?: YoutubeVideoAsset;
  mediaBundleAsset?: MediaBundleAsset;
  imageAsset?: ImageAsset;
  textAsset?: TextAsset;
  leadFormAsset?: LeadFormAsset;
  bookOnGoogleAsset?: BookOnGoogleAsset;
  promotionAsset?: PromotionAsset;
  calloutAsset?: CalloutAsset;
  structuredSnippetAsset?: StructuredSnippetAsset;
  sitelinkAsset?: SitelinkAsset;
  pageFeedAsset?: PageFeedAsset;
  dynamicEducationAsset?: DynamicEducationAsset;
  mobileAppAsset?: MobileAppAsset;
  hotelCalloutAsset?: HotelCalloutAsset;
  callAsset?: CallAsset;
  priceAsset?: PriceAsset;
  callToActionAsset?: CallToActionAsset;
  dynamicRealEstateAsset?: DynamicRealEstateAsset;
  dynamicCustomAsset?: DynamicCustomAsset;
  dynamicHotelsAndRentalsAsset?: DynamicHotelsAndRentalsAsset;
  dynamicFlightsAsset?: DynamicFlightsAsset;
  demandGenCarouselCardAsset?: DemandGenCarouselCardAsset;
  dynamicTravelAsset?: DynamicTravelAsset;
  dynamicLocalAsset?: DynamicLocalAsset;
  dynamicJobsAsset?: DynamicJobsAsset;
  locationAsset?: LocationAsset;
  hotelPropertyAsset?: HotelPropertyAsset;
  businessMessageAsset?: BusinessMessageAsset;
  appDeepLinkAsset?: AppDeepLinkAsset;
  youtubeVideoListAsset?: YouTubeVideoListAsset;
}
