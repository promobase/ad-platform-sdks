// @generated
// fingerprint: sha256:dee4ec2478acae14e5864ada5290435ddbee3643b8bcfe933fb81d6ae4002109
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignCustomizerOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignCustomizersRequest. Do not edit by hand.
export interface MutateCampaignCustomizersRequest {
  customerId?: string;
  operations?: CampaignCustomizerOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
