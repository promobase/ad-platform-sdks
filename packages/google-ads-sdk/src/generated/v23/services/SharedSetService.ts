// @generated
// fingerprint: sha256:21ddb75282cd1f2b3827f9120780d1d0a7f5aa742d04743854af1f2f75b8828c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateSharedSetsRequest, MutateSharedSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.SharedSetService. Do not edit by hand.
export const sharedSetService = {
  mutateSharedSets(client: HttpClient, customerId: string, body: Omit<MutateSharedSetsRequest, "customerId">): Promise<MutateSharedSetsResponse> {
    return client.post<MutateSharedSetsResponse>(`/v23/customers/${customerId}/sharedSets:mutate`, body);
  }
};
