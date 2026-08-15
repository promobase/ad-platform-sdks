// @generated
// fingerprint: sha256:3d33a8db7f09f03f650c5a225d494e20c106df45be3fe6bae583f50a6dbd3cbb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingChannelType, AssetFieldType, FinalUrlImageGenerationInput, FreeformImageGenerationInput, ProductRecontextGenerationImageInput } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateImagesRequest. Do not edit by hand.
export interface GenerateImagesRequest {
  customerId?: string;
  assetFieldTypes?: AssetFieldType[];
  advertisingChannelType?: AdvertisingChannelType;
  finalUrlGeneration?: FinalUrlImageGenerationInput;
  freeformGeneration?: FreeformImageGenerationInput;
  productRecontextGeneration?: ProductRecontextGenerationImageInput;
}
