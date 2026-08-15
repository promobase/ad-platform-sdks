// @generated
// fingerprint: sha256:bfac7da4898b37417ecb1baa4ddacdafecf8ee1db80d98990c75b4af37701d8b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionGoalCampaignConfigOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionGoalCampaignConfigsRequest. Do not edit by hand.
export interface MutateConversionGoalCampaignConfigsRequest {
  customerId?: string;
  operations?: ConversionGoalCampaignConfigOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
