// @generated
// fingerprint: sha256:5fd08b4da79a77f054d3b794720cd6b4c757229212228a2a45b74baf7c0fc626
// DO NOT EDIT: generated file; changes will be overwritten.
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
