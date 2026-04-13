import type { FineGrainedConversionValueMappings, PostbackMapping } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema. Do not edit by hand.
export interface SkAdNetworkConversionValueSchema {
  appId?: string;
  measurementWindowHours?: number;
  fineGrainedConversionValueMappings?: FineGrainedConversionValueMappings[];
  postbackMappings?: PostbackMapping[];
}
