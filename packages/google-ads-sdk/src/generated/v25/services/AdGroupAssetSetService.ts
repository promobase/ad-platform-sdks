// @generated
// fingerprint: sha256:dd64921bee0e1fffa63b3841050979038b52fcebf719f70f9c58b9dbeefddbb5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupAssetSetsRequest, MutateAdGroupAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupAssetSetService. Do not edit by hand.
export const adGroupAssetSetService = {
  mutateAdGroupAssetSets(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAssetSetsRequest, "customerId">): Promise<MutateAdGroupAssetSetsResponse> {
    return client.post<MutateAdGroupAssetSetsResponse>(`/v25/customers/${customerId}/adGroupAssetSets:mutate`, body);
  }
};
