// @generated
// fingerprint: sha256:ddd27211f117b0d4bb8ca58295b4a3b354159052f6d478311712f7df68ce7e6a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetGroupSignalsRequest, MutateAssetGroupSignalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetGroupSignalService. Do not edit by hand.
export const assetGroupSignalService = {
  mutateAssetGroupSignals(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupSignalsRequest, "customerId">): Promise<MutateAssetGroupSignalsResponse> {
    return client.post<MutateAssetGroupSignalsResponse>(`/v25/customers/${customerId}/assetGroupSignals:mutate`, body);
  }
};
