import type { AssetGroupSignalOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetGroupSignalsRequest. Do not edit by hand.
export interface MutateAssetGroupSignalsRequest {
  customerId?: string;
  operations?: AssetGroupSignalOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
