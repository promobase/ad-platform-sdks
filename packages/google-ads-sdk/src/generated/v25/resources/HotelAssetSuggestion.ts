// @generated
// fingerprint: sha256:86ed854192b4d472d2030b9dcaaec2b1543de83f8732be12842b0a674507bcb6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CallToActionType, HotelAssetSuggestionStatus, HotelImageAsset, HotelTextAsset } from "../index.ts";

// Generated from google.ads.googleads.v25.services.HotelAssetSuggestion. Do not edit by hand.
export interface HotelAssetSuggestion {
  placeId?: string;
  finalUrl?: string;
  hotelName?: string;
  callToAction?: CallToActionType;
  textAssets?: HotelTextAsset[];
  imageAssets?: HotelImageAsset[];
  status?: HotelAssetSuggestionStatus;
}
