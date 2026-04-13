import type { MutateCustomerNegativeCriteriaRequest, MutateCustomerNegativeCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerNegativeCriterionService. Do not edit by hand.
export const customerNegativeCriterionService = {
  mutateCustomerNegativeCriteria(client: HttpClient, customerId: string, body: Omit<MutateCustomerNegativeCriteriaRequest, "customerId">): Promise<MutateCustomerNegativeCriteriaResponse> {
    return client.post<MutateCustomerNegativeCriteriaResponse>(`/v23/customers/${customerId}/customerNegativeCriteria:mutate`, body);
  }
};
