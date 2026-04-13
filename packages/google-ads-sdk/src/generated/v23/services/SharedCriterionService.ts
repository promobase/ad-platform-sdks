import type { MutateSharedCriteriaRequest, MutateSharedCriteriaResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.SharedCriterionService. Do not edit by hand.
export const sharedCriterionService = {
  mutateSharedCriteria(client: HttpClient, customerId: string, body: Omit<MutateSharedCriteriaRequest, "customerId">): Promise<MutateSharedCriteriaResponse> {
    return client.post<MutateSharedCriteriaResponse>(`/v23/customers/${customerId}/sharedCriteria:mutate`, body);
  }
};
