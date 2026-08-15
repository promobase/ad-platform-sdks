// @generated
// fingerprint: sha256:a74d977e55ed72cf9973f843ea90d5720996c0f7a535b3741cd6e5f0504d0926
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetGroupSignalsRequest, MutateAssetGroupSignalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetGroupSignalService. Do not edit by hand.
export const assetGroupSignalService = {
  mutateAssetGroupSignals(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupSignalsRequest, "customerId">): Promise<MutateAssetGroupSignalsResponse> {
    return client.post<MutateAssetGroupSignalsResponse>(`/v23/customers/${customerId}/assetGroupSignals:mutate`, body);
  }
};
