// @generated
// fingerprint: sha256:f3f7ab73a33218114d61c510e42037f830da55b309fd3f674b83b3dffd7a069e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BiddingSeasonalityAdjustmentOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateBiddingSeasonalityAdjustmentsRequest. Do not edit by hand.
export interface MutateBiddingSeasonalityAdjustmentsRequest {
  customerId?: string;
  operations?: BiddingSeasonalityAdjustmentOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
