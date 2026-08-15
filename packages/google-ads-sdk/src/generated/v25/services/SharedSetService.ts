// @generated
// fingerprint: sha256:627cbc5d20cd208b025e85e244691d03067b8ac44b3befcfbde61321da29dbe2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateSharedSetsRequest, MutateSharedSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.SharedSetService. Do not edit by hand.
export const sharedSetService = {
  mutateSharedSets(client: HttpClient, customerId: string, body: Omit<MutateSharedSetsRequest, "customerId">): Promise<MutateSharedSetsResponse> {
    return client.post<MutateSharedSetsResponse>(`/v25/customers/${customerId}/sharedSets:mutate`, body);
  }
};
