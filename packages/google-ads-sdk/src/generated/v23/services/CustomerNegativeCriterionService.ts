// @generated
// fingerprint: sha256:71b458dbb9f12ac7e0eddcb205ee187ba621955884e2d02cc8a92c830afc4b51
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerNegativeCriteriaRequest, MutateCustomerNegativeCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerNegativeCriterionService. Do not edit by hand.
export const customerNegativeCriterionService = {
  mutateCustomerNegativeCriteria(client: HttpClient, customerId: string, body: Omit<MutateCustomerNegativeCriteriaRequest, "customerId">): Promise<MutateCustomerNegativeCriteriaResponse> {
    return client.post<MutateCustomerNegativeCriteriaResponse>(`/v23/customers/${customerId}/customerNegativeCriteria:mutate`, body);
  }
};
