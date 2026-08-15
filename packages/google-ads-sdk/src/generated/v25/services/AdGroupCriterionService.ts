// @generated
// fingerprint: sha256:633305120d75da1a7bc7a4be4cb959a66265af9606271a9c129b843b13981e21
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupCriteriaRequest, MutateAdGroupCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupCriterionService. Do not edit by hand.
export const adGroupCriterionService = {
  mutateAdGroupCriteria(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriteriaRequest, "customerId">): Promise<MutateAdGroupCriteriaResponse> {
    return client.post<MutateAdGroupCriteriaResponse>(`/v25/customers/${customerId}/adGroupCriteria:mutate`, body);
  }
};
