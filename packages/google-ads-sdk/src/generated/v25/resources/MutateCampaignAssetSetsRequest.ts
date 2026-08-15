// @generated
// fingerprint: sha256:84506bfadfc6ee42dc7a8741b5657d5f55a3e522e578f4ed8ecc5bc4b9ce7a24
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignAssetSetsRequest. Do not edit by hand.
export interface MutateCampaignAssetSetsRequest {
  customerId?: string;
  operations?: CampaignAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
