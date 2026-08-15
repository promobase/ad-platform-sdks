// @generated
// fingerprint: sha256:7dcb38f6461d43f918830483502c3f957934e3aff6bb48cfb3721aba4eaf7621
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupAssetSetsRequest, MutateAdGroupAssetSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupAssetSetService. Do not edit by hand.
export const adGroupAssetSetService = {
  mutateAdGroupAssetSets(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAssetSetsRequest, "customerId">): Promise<MutateAdGroupAssetSetsResponse> {
    return client.post<MutateAdGroupAssetSetsResponse>(`/v23/customers/${customerId}/adGroupAssetSets:mutate`, body);
  }
};
