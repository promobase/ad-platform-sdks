import type { AssetOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetsRequest. Do not edit by hand.
export interface MutateAssetsRequest {
  customerId?: string;
  operations?: AssetOperation[];
  partialFailure?: boolean;
  responseContentType?: ResponseContentType;
  validateOnly?: boolean;
}
