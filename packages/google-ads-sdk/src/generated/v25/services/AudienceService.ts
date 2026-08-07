import type { MutateAudiencesRequest, MutateAudiencesResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AudienceService. Do not edit by hand.
export const audienceService = {
  mutateAudiences(client: HttpClient, customerId: string, body: Omit<MutateAudiencesRequest, "customerId">): Promise<MutateAudiencesResponse> {
    return client.post<MutateAudiencesResponse>(`/v25/customers/${customerId}/audiences:mutate`, body);
  }
};
