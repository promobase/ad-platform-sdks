// @generated
// fingerprint: sha256:9340579e05a3e3edc78d73eb13db8783b0786481138cd18515b57301fbd57ac1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAudiencesRequest, MutateAudiencesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AudienceService. Do not edit by hand.
export const audienceService = {
  mutateAudiences(client: HttpClient, customerId: string, body: Omit<MutateAudiencesRequest, "customerId">): Promise<MutateAudiencesResponse> {
    return client.post<MutateAudiencesResponse>(`/v25/customers/${customerId}/audiences:mutate`, body);
  }
};
