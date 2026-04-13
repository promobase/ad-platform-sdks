import type { MutateAdGroupCustomizersRequest, MutateAdGroupCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupCustomizerService. Do not edit by hand.
export const adGroupCustomizerService = {
  mutateAdGroupCustomizers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCustomizersRequest, "customerId">): Promise<MutateAdGroupCustomizersResponse> {
    return client.post<MutateAdGroupCustomizersResponse>(`/v23/customers/${customerId}/adGroupCustomizers:mutate`, body);
  }
};
