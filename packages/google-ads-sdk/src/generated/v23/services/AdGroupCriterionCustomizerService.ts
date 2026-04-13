import type { MutateAdGroupCriterionCustomizersRequest, MutateAdGroupCriterionCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupCriterionCustomizerService. Do not edit by hand.
export const adGroupCriterionCustomizerService = {
  mutateAdGroupCriterionCustomizers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriterionCustomizersRequest, "customerId">): Promise<MutateAdGroupCriterionCustomizersResponse> {
    return client.post<MutateAdGroupCriterionCustomizersResponse>(`/v23/customers/${customerId}/AdGroupCriterionCustomizers:mutate`, body);
  }
};
