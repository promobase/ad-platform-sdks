// @generated
// fingerprint: sha256:d54bc829c00b917cd905d5bd743446bfd3b43638a6816a9f6148854ccff6107d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignAssetSetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignAssetSetsRequest. Do not edit by hand.
export interface MutateCampaignAssetSetsRequest {
  customerId?: string;
  operations?: CampaignAssetSetOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
