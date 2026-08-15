// @generated
// fingerprint: sha256:c72a12b825e3940451760514a8d8e6679d9e4f587056eca2101af565ab966370
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetSetsRequest, MutateAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetSetService. Do not edit by hand.
export const assetSetService = {
  mutateAssetSets(client: HttpClient, customerId: string, body: Omit<MutateAssetSetsRequest, "customerId">): Promise<MutateAssetSetsResponse> {
    return client.post<MutateAssetSetsResponse>(`/v23/customers/${customerId}/assetSets:mutate`, body);
  }
};
