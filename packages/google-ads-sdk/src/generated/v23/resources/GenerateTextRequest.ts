// @generated
// fingerprint: sha256:2a6b18d1eddea6cfa3a3bfbd6321c86f29d4bdc85fc05671947ff62036da6f3f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingChannelType, AssetFieldType, AssetGenerationExistingContext } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateTextRequest. Do not edit by hand.
export interface GenerateTextRequest {
  customerId?: string;
  assetFieldTypes?: AssetFieldType[];
  finalUrl?: string;
  freeformPrompt?: string;
  keywords?: string[];
  existingGenerationContext?: AssetGenerationExistingContext;
  advertisingChannelType?: AdvertisingChannelType;
}
