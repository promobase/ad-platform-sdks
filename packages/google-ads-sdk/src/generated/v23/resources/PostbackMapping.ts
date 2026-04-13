import type { CoarseGrainedConversionValueMappings, SkAdNetworkCoarseConversionValue } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.PostbackMapping. Do not edit by hand.
export interface PostbackMapping {
  postbackSequenceIndex?: number;
  coarseGrainedConversionValueMappings?: CoarseGrainedConversionValueMappings;
  lockWindowCoarseConversionValue?: SkAdNetworkCoarseConversionValue;
  lockWindowFineConversionValue?: number;
  lockWindowEvent?: string;
}
