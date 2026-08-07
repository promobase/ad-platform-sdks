import type { MutateSharedSetsRequest, MutateSharedSetsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.SharedSetService. Do not edit by hand.
export const sharedSetService = {
  mutateSharedSets(client: HttpClient, customerId: string, body: Omit<MutateSharedSetsRequest, "customerId">): Promise<MutateSharedSetsResponse> {
    return client.post<MutateSharedSetsResponse>(`/v25/customers/${customerId}/sharedSets:mutate`, body);
  }
};
