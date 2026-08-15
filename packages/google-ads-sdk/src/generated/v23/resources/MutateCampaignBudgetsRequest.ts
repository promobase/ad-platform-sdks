// @generated
// fingerprint: sha256:88fec7c890d3d46a0c2bafd7b4cad5c929a1d2bad60f08b4c128c697154ff0bb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignBudgetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignBudgetsRequest. Do not edit by hand.
export interface MutateCampaignBudgetsRequest {
  customerId?: string;
  operations?: CampaignBudgetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
