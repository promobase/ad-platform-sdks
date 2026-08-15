// @generated
// fingerprint: sha256:4281428865e0a4bcddd098567a16fb91a22bfdb89e150c21b9ca208d4f61be7b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignBidModifierOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateCampaignBidModifiersRequest. Do not edit by hand.
export interface MutateCampaignBidModifiersRequest {
  customerId?: string;
  operations?: CampaignBidModifierOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
