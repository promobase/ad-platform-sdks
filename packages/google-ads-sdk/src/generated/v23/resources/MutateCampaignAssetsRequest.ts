// @generated
// fingerprint: sha256:f16655695ca81ada7e04fd56bb99de47362fc99304c4d729fc91e3f3da67f1d5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignAssetsRequest. Do not edit by hand.
export interface MutateCampaignAssetsRequest {
  customerId?: string;
  operations?: CampaignAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
