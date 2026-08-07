import type { MutateCustomerLabelsRequest, MutateCustomerLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerLabelService. Do not edit by hand.
export const customerLabelService = {
  mutateCustomerLabels(client: HttpClient, customerId: string, body: Omit<MutateCustomerLabelsRequest, "customerId">): Promise<MutateCustomerLabelsResponse> {
    return client.post<MutateCustomerLabelsResponse>(`/v25/customers/${customerId}/customerLabels:mutate`, body);
  }
};
