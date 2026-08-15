// @generated
// fingerprint: sha256:25ca1e65604805ee21e16f877e99c876ae71dfbfb40838e6f26f4f818d36d03b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetSetsRequest, MutateAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AssetSetService. Do not edit by hand.
export const assetSetService = {
  mutateAssetSets(client: HttpClient, customerId: string, body: Omit<MutateAssetSetsRequest, "customerId">): Promise<MutateAssetSetsResponse> {
    return client.post<MutateAssetSetsResponse>(`/v25/customers/${customerId}/assetSets:mutate`, body);
  }
};
