// @generated
// fingerprint: sha256:ec58314800a25b6f280ce16d93cf23e6f34bf97229ea1c80a4ce12070e860927
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CoarseGrainedConversionValueMappings, SkAdNetworkCoarseConversionValue } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.PostbackMapping. Do not edit by hand.
export interface PostbackMapping {
  postbackSequenceIndex?: number;
  coarseGrainedConversionValueMappings?: CoarseGrainedConversionValueMappings;
  lockWindowCoarseConversionValue?: SkAdNetworkCoarseConversionValue;
  lockWindowFineConversionValue?: number;
  lockWindowEvent?: string;
}
