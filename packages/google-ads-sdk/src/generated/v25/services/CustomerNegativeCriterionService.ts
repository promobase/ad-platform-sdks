import type { MutateCustomerNegativeCriteriaRequest, MutateCustomerNegativeCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerNegativeCriterionService. Do not edit by hand.
export const customerNegativeCriterionService = {
  mutateCustomerNegativeCriteria(client: HttpClient, customerId: string, body: Omit<MutateCustomerNegativeCriteriaRequest, "customerId">): Promise<MutateCustomerNegativeCriteriaResponse> {
    return client.post<MutateCustomerNegativeCriteriaResponse>(`/v25/customers/${customerId}/customerNegativeCriteria:mutate`, body);
  }
};
