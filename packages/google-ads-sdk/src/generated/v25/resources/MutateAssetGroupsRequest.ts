import type { AssetGroupOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.MutateAssetGroupsRequest. Do not edit by hand.
export interface MutateAssetGroupsRequest {
  customerId?: string;
  operations?: AssetGroupOperation[];
  validateOnly?: boolean;
}
