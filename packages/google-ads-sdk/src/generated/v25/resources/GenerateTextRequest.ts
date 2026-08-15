// @generated
// fingerprint: sha256:57662e5bfc8c6aa1660b7a8282389a7865afdc0129130484dac44eb291c52628
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingChannelType, AssetFieldType, AssetGenerationExistingContext } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateTextRequest. Do not edit by hand.
export interface GenerateTextRequest {
  customerId?: string;
  assetFieldTypes?: AssetFieldType[];
  finalUrl?: string;
  freeformPrompt?: string;
  keywords?: string[];
  existingGenerationContext?: AssetGenerationExistingContext;
  advertisingChannelType?: AdvertisingChannelType;
}
