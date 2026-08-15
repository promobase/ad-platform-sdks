// @generated
// fingerprint: sha256:540cc8794034b202588980b73f5929f6c1077fa6ec1309c787285fdc9247936f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateSharedCriteriaRequest, MutateSharedCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.SharedCriterionService. Do not edit by hand.
export const sharedCriterionService = {
  mutateSharedCriteria(client: HttpClient, customerId: string, body: Omit<MutateSharedCriteriaRequest, "customerId">): Promise<MutateSharedCriteriaResponse> {
    return client.post<MutateSharedCriteriaResponse>(`/v25/customers/${customerId}/sharedCriteria:mutate`, body);
  }
};
