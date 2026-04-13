import type { MutateAdGroupAdLabelsRequest, MutateAdGroupAdLabelsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupAdLabelService. Do not edit by hand.
export const adGroupAdLabelService = {
  mutateAdGroupAdLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAdLabelsRequest, "customerId">): Promise<MutateAdGroupAdLabelsResponse> {
    return client.post<MutateAdGroupAdLabelsResponse>(`/v23/customers/${customerId}/adGroupAdLabels:mutate`, body);
  }
};
