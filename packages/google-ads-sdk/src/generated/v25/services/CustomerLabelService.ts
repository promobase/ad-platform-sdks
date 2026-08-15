// @generated
// fingerprint: sha256:4ab86dbb1363593797ab11d17945a9ba1e9c721742ab4f4f2c2b4f3c0b0cdcb8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerLabelsRequest, MutateCustomerLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerLabelService. Do not edit by hand.
export const customerLabelService = {
  mutateCustomerLabels(client: HttpClient, customerId: string, body: Omit<MutateCustomerLabelsRequest, "customerId">): Promise<MutateCustomerLabelsResponse> {
    return client.post<MutateCustomerLabelsResponse>(`/v25/customers/${customerId}/customerLabels:mutate`, body);
  }
};
