// @generated
// fingerprint: sha256:f20e78010921217a3a9162349b9d3ccf5a5905de7fc3b4ac312cc3b48167ad4e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerLabelsRequest, MutateCustomerLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerLabelService. Do not edit by hand.
export const customerLabelService = {
  mutateCustomerLabels(client: HttpClient, customerId: string, body: Omit<MutateCustomerLabelsRequest, "customerId">): Promise<MutateCustomerLabelsResponse> {
    return client.post<MutateCustomerLabelsResponse>(`/v23/customers/${customerId}/customerLabels:mutate`, body);
  }
};
