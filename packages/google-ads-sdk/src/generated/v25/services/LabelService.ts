import type { MutateLabelsRequest, MutateLabelsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.LabelService. Do not edit by hand.
export const labelService = {
  mutateLabels(client: HttpClient, customerId: string, body: Omit<MutateLabelsRequest, "customerId">): Promise<MutateLabelsResponse> {
    return client.post<MutateLabelsResponse>(`/v25/customers/${customerId}/labels:mutate`, body);
  }
};
