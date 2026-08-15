// @generated
// fingerprint: sha256:7658f538e78306f6f3946056db5cf7b9b603ec30ae4289abedc4d13fefa002a2
// DO NOT EDIT: generated file; changes will be overwritten.
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
