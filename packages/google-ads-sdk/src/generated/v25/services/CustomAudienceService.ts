import type { MutateCustomAudiencesRequest, MutateCustomAudiencesResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomAudienceService. Do not edit by hand.
export const customAudienceService = {
  mutateCustomAudiences(client: HttpClient, customerId: string, body: Omit<MutateCustomAudiencesRequest, "customerId">): Promise<MutateCustomAudiencesResponse> {
    return client.post<MutateCustomAudiencesResponse>(`/v25/customers/${customerId}/customAudiences:mutate`, body);
  }
};
