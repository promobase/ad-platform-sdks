import type { ConversionGoalCampaignConfigOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateConversionGoalCampaignConfigsRequest. Do not edit by hand.
export interface MutateConversionGoalCampaignConfigsRequest {
  customerId?: string;
  operations?: ConversionGoalCampaignConfigOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
