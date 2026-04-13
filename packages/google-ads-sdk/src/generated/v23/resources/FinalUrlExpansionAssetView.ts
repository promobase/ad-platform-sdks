import type { AssetFieldType, AssetLinkStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.FinalUrlExpansionAssetView. Do not edit by hand.
export interface FinalUrlExpansionAssetView {
  resourceName?: string;
  campaign?: string;
  asset?: string;
  fieldType?: AssetFieldType;
  status?: AssetLinkStatus;
  finalUrl?: string;
  adGroup?: string;
  assetGroup?: string;
}
