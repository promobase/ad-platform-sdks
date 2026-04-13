import type { AssetGroupOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateAssetGroupsRequest. Do not edit by hand.
export interface MutateAssetGroupsRequest {
  customerId?: string;
  operations?: AssetGroupOperation[];
  validateOnly?: boolean;
}
