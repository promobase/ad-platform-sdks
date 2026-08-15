// @generated
// fingerprint: sha256:9b13a87e673b86dd2c5fcb328287e2be30ea86ae8570bc0fc4f3337b7ff2b90d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignCustomizersRequest. Do not edit by hand.
export interface MutateCampaignCustomizersRequest {
  customerId?: string;
  operations?: CampaignCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
