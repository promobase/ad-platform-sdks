import type { MutateCustomerLabelsRequest, MutateCustomerLabelsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerLabelService. Do not edit by hand.
export const customerLabelService = {
  mutateCustomerLabels(client: HttpClient, customerId: string, body: Omit<MutateCustomerLabelsRequest, "customerId">): Promise<MutateCustomerLabelsResponse> {
    return client.post<MutateCustomerLabelsResponse>(`/v23/customers/${customerId}/customerLabels:mutate`, body);
  }
};
