// @generated
// fingerprint: sha256:f8858f110c2ab2fb063b0ed4c4a132f31dae3acc5e6c29811e6ca6ae74a1d443
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignCriteriaRequest. Do not edit by hand.
export interface MutateCampaignCriteriaRequest {
  customerId?: string;
  operations?: CampaignCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
