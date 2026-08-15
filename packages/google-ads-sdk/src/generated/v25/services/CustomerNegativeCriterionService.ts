// @generated
// fingerprint: sha256:d6c27d917caa0efe68d5455c4deace8fe31cc5a12c32de2ec940e531cddbf8ad
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerNegativeCriteriaRequest, MutateCustomerNegativeCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerNegativeCriterionService. Do not edit by hand.
export const customerNegativeCriterionService = {
  mutateCustomerNegativeCriteria(client: HttpClient, customerId: string, body: Omit<MutateCustomerNegativeCriteriaRequest, "customerId">): Promise<MutateCustomerNegativeCriteriaResponse> {
    return client.post<MutateCustomerNegativeCriteriaResponse>(`/v25/customers/${customerId}/customerNegativeCriteria:mutate`, body);
  }
};
