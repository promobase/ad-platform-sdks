// @generated
// fingerprint: sha256:a1997481c2286f98561bfa0c43f98f0c599cd408c9f8d95fb34a068f734e700b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignAssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignAssetsRequest. Do not edit by hand.
export interface MutateCampaignAssetsRequest {
  customerId?: string;
  operations?: CampaignAssetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
