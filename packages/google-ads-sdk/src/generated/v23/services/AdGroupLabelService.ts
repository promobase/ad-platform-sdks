import type { MutateAdGroupLabelsRequest, MutateAdGroupLabelsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupLabelService. Do not edit by hand.
export const adGroupLabelService = {
  mutateAdGroupLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupLabelsRequest, "customerId">): Promise<MutateAdGroupLabelsResponse> {
    return client.post<MutateAdGroupLabelsResponse>(`/v23/customers/${customerId}/adGroupLabels:mutate`, body);
  }
};
