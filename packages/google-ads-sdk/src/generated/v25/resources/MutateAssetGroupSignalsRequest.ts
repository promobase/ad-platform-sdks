// @generated
// fingerprint: sha256:f8e78fd38d21942e402f6f44196d1f243bd85d3b20373ee0930000424a3317b2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AssetGroupSignalOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetGroupSignalsRequest. Do not edit by hand.
export interface MutateAssetGroupSignalsRequest {
  customerId?: string;
  operations?: AssetGroupSignalOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
