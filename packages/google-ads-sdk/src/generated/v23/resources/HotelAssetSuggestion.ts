import type { CallToActionType, HotelAssetSuggestionStatus, HotelImageAsset, HotelTextAsset } from "../index.ts";

// Generated from google.ads.googleads.v23.services.HotelAssetSuggestion. Do not edit by hand.
export interface HotelAssetSuggestion {
  placeId?: string;
  finalUrl?: string;
  hotelName?: string;
  callToAction?: CallToActionType;
  textAssets?: HotelTextAsset[];
  imageAssets?: HotelImageAsset[];
  status?: HotelAssetSuggestionStatus;
}
