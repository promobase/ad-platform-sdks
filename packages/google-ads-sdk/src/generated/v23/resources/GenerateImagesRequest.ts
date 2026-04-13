import type { AdvertisingChannelType, AssetFieldType, FinalUrlImageGenerationInput, FreeformImageGenerationInput, ProductRecontextGenerationImageInput } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateImagesRequest. Do not edit by hand.
export interface GenerateImagesRequest {
  customerId?: string;
  assetFieldTypes?: AssetFieldType[];
  advertisingChannelType?: AdvertisingChannelType;
  finalUrlGeneration?: FinalUrlImageGenerationInput;
  freeformGeneration?: FreeformImageGenerationInput;
  productRecontextGeneration?: ProductRecontextGenerationImageInput;
}
