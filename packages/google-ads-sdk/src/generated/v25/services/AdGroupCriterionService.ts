import type { MutateAdGroupCriteriaRequest, MutateAdGroupCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupCriterionService. Do not edit by hand.
export const adGroupCriterionService = {
  mutateAdGroupCriteria(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriteriaRequest, "customerId">): Promise<MutateAdGroupCriteriaResponse> {
    return client.post<MutateAdGroupCriteriaResponse>(`/v25/customers/${customerId}/adGroupCriteria:mutate`, body);
  }
};
