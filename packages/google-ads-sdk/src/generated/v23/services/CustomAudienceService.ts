import type { MutateCustomAudiencesRequest, MutateCustomAudiencesResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomAudienceService. Do not edit by hand.
export const customAudienceService = {
  mutateCustomAudiences(client: HttpClient, customerId: string, body: Omit<MutateCustomAudiencesRequest, "customerId">): Promise<MutateCustomAudiencesResponse> {
    return client.post<MutateCustomAudiencesResponse>(`/v23/customers/${customerId}/customAudiences:mutate`, body);
  }
};
