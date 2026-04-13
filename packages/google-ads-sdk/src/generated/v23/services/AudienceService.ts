import type { MutateAudiencesRequest, MutateAudiencesResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AudienceService. Do not edit by hand.
export const audienceService = {
  mutateAudiences(client: HttpClient, customerId: string, body: Omit<MutateAudiencesRequest, "customerId">): Promise<MutateAudiencesResponse> {
    return client.post<MutateAudiencesResponse>(`/v23/customers/${customerId}/audiences:mutate`, body);
  }
};
