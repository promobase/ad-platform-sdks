import type { MutateAdGroupCriterionCustomizersRequest, MutateAdGroupCriterionCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupCriterionCustomizerService. Do not edit by hand.
export const adGroupCriterionCustomizerService = {
  mutateAdGroupCriterionCustomizers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriterionCustomizersRequest, "customerId">): Promise<MutateAdGroupCriterionCustomizersResponse> {
    return client.post<MutateAdGroupCriterionCustomizersResponse>(`/v25/customers/${customerId}/AdGroupCriterionCustomizers:mutate`, body);
  }
};
