import type { AssetGroupIdentifier, ShareablePreviewResult } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ShareablePreviewOrError. Do not edit by hand.
export interface ShareablePreviewOrError {
  assetGroupIdentifier?: AssetGroupIdentifier;
  shareablePreviewResult?: ShareablePreviewResult;
  partialFailureError?: unknown;
  adGroupAd?: string;
}
