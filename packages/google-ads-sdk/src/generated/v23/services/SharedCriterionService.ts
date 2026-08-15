// @generated
// fingerprint: sha256:032cb6b48cc1504abdb8060de00f7868d58ba96f5ecd144c6de1af8dec6ec0b4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateSharedCriteriaRequest, MutateSharedCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.SharedCriterionService. Do not edit by hand.
export const sharedCriterionService = {
  mutateSharedCriteria(client: HttpClient, customerId: string, body: Omit<MutateSharedCriteriaRequest, "customerId">): Promise<MutateSharedCriteriaResponse> {
    return client.post<MutateSharedCriteriaResponse>(`/v23/customers/${customerId}/sharedCriteria:mutate`, body);
  }
};
