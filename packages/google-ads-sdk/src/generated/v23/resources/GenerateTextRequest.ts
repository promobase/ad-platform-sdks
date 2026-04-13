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
