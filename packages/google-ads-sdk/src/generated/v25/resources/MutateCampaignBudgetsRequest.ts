// @generated
// fingerprint: sha256:41c41180b7371f31061210728544d6c5ad5f048d61a483a4d9209253a6c49b8a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignBudgetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignBudgetsRequest. Do not edit by hand.
export interface MutateCampaignBudgetsRequest {
  customerId?: string;
  operations?: CampaignBudgetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
