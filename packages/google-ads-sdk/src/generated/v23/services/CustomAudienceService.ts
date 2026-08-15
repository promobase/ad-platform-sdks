// @generated
// fingerprint: sha256:ab668238ed21b3f5865d3cbdd6a8e5466fa3f1a9cabcfdb7c691cafb0ec9c479
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomAudiencesRequest, MutateCustomAudiencesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomAudienceService. Do not edit by hand.
export const customAudienceService = {
  mutateCustomAudiences(client: HttpClient, customerId: string, body: Omit<MutateCustomAudiencesRequest, "customerId">): Promise<MutateCustomAudiencesResponse> {
    return client.post<MutateCustomAudiencesResponse>(`/v23/customers/${customerId}/customAudiences:mutate`, body);
  }
};
