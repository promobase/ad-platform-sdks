import type { MutateCustomInterestsRequest, MutateCustomInterestsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomInterestService. Do not edit by hand.
export const customInterestService = {
  mutateCustomInterests(client: HttpClient, customerId: string, body: Omit<MutateCustomInterestsRequest, "customerId">): Promise<MutateCustomInterestsResponse> {
    return client.post<MutateCustomInterestsResponse>(`/v23/customers/${customerId}/customInterests:mutate`, body);
  }
};
