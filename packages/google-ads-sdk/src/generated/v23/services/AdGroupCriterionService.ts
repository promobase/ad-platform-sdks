import type { MutateAdGroupCriteriaRequest, MutateAdGroupCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupCriterionService. Do not edit by hand.
export const adGroupCriterionService = {
  mutateAdGroupCriteria(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriteriaRequest, "customerId">): Promise<MutateAdGroupCriteriaResponse> {
    return client.post<MutateAdGroupCriteriaResponse>(`/v23/customers/${customerId}/adGroupCriteria:mutate`, body);
  }
};
