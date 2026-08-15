// @generated
// fingerprint: sha256:f4b1505f3346d8fb160cfa178336285428633774de7739d841043b40b3494166
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAudiencesRequest, MutateAudiencesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AudienceService. Do not edit by hand.
export const audienceService = {
  mutateAudiences(client: HttpClient, customerId: string, body: Omit<MutateAudiencesRequest, "customerId">): Promise<MutateAudiencesResponse> {
    return client.post<MutateAudiencesResponse>(`/v23/customers/${customerId}/audiences:mutate`, body);
  }
};
