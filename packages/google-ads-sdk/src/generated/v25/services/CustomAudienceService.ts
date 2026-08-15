// @generated
// fingerprint: sha256:65f09032b33dca9fa6282dccfd6c0ae153a1eb2ac6dc13eacca3961f472c9d42
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomAudiencesRequest, MutateCustomAudiencesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomAudienceService. Do not edit by hand.
export const customAudienceService = {
  mutateCustomAudiences(client: HttpClient, customerId: string, body: Omit<MutateCustomAudiencesRequest, "customerId">): Promise<MutateCustomAudiencesResponse> {
    return client.post<MutateCustomAudiencesResponse>(`/v25/customers/${customerId}/customAudiences:mutate`, body);
  }
};
