// @generated
// fingerprint: sha256:d5d629c26a39414855cbea522aa97f2bb9f0497811ffad21bc8b9cd61da65a15
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionGoalCampaignConfigOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateConversionGoalCampaignConfigsRequest. Do not edit by hand.
export interface MutateConversionGoalCampaignConfigsRequest {
  customerId?: string;
  operations?: ConversionGoalCampaignConfigOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
