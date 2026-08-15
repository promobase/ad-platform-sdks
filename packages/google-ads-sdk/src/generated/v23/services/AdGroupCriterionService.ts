// @generated
// fingerprint: sha256:639d3b933c9096b04f99e02371762b409fe2175f60dbc3c82abe63809184fd01
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupCriteriaRequest, MutateAdGroupCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupCriterionService. Do not edit by hand.
export const adGroupCriterionService = {
  mutateAdGroupCriteria(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriteriaRequest, "customerId">): Promise<MutateAdGroupCriteriaResponse> {
    return client.post<MutateAdGroupCriteriaResponse>(`/v23/customers/${customerId}/adGroupCriteria:mutate`, body);
  }
};
