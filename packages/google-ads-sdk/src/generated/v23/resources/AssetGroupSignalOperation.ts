import type { AssetGroupSignal, PolicyViolationKey } from "../index.ts";

// Generated from google.ads.googleads.v23.services.AssetGroupSignalOperation. Do not edit by hand.
export interface AssetGroupSignalOperation {
  exemptPolicyViolationKeys?: PolicyViolationKey[];
  create?: AssetGroupSignal;
  remove?: string;
}
