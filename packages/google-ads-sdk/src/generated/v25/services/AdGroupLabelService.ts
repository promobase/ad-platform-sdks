import type { MutateAdGroupLabelsRequest, MutateAdGroupLabelsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupLabelService. Do not edit by hand.
export const adGroupLabelService = {
  mutateAdGroupLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupLabelsRequest, "customerId">): Promise<MutateAdGroupLabelsResponse> {
    return client.post<MutateAdGroupLabelsResponse>(`/v25/customers/${customerId}/adGroupLabels:mutate`, body);
  }
};
