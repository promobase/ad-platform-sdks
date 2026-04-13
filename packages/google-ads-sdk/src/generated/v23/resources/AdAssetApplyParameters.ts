import type { ApplyScope, Asset } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ApplyRecommendationOperation.AdAssetApplyParameters. Do not edit by hand.
export interface AdAssetApplyParameters {
  newAssets?: Asset[];
  existingAssets?: string[];
  scope?: ApplyScope;
}
