import type { MutateAdGroupAdLabelsRequest, MutateAdGroupAdLabelsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupAdLabelService. Do not edit by hand.
export const adGroupAdLabelService = {
  mutateAdGroupAdLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAdLabelsRequest, "customerId">): Promise<MutateAdGroupAdLabelsResponse> {
    return client.post<MutateAdGroupAdLabelsResponse>(`/v25/customers/${customerId}/adGroupAdLabels:mutate`, body);
  }
};
