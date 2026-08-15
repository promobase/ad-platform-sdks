// @generated
// fingerprint: sha256:36b82e2807e589db29f40a30da3e55120416c06109de267de06221e6c7c633d5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CoarseGrainedConversionValueMappings, SkAdNetworkCoarseConversionValue } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.PostbackMapping. Do not edit by hand.
export interface PostbackMapping {
  postbackSequenceIndex?: number;
  coarseGrainedConversionValueMappings?: CoarseGrainedConversionValueMappings;
  lockWindowCoarseConversionValue?: SkAdNetworkCoarseConversionValue;
  lockWindowFineConversionValue?: number;
  lockWindowEvent?: string;
}
