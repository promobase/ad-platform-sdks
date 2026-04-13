import type { MutateAdGroupCriterionLabelsRequest, MutateAdGroupCriterionLabelsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupCriterionLabelService. Do not edit by hand.
export const adGroupCriterionLabelService = {
  mutateAdGroupCriterionLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriterionLabelsRequest, "customerId">): Promise<MutateAdGroupCriterionLabelsResponse> {
    return client.post<MutateAdGroupCriterionLabelsResponse>(`/v23/customers/${customerId}/adGroupCriterionLabels:mutate`, body);
  }
};
