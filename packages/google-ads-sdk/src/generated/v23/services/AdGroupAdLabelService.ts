// @generated
// fingerprint: sha256:950a8b22ea41bd9ff2a898a91adc4205368d00f18b9ca35794e71f5c20db05d5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupAdLabelsRequest, MutateAdGroupAdLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupAdLabelService. Do not edit by hand.
export const adGroupAdLabelService = {
  mutateAdGroupAdLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAdLabelsRequest, "customerId">): Promise<MutateAdGroupAdLabelsResponse> {
    return client.post<MutateAdGroupAdLabelsResponse>(`/v23/customers/${customerId}/adGroupAdLabels:mutate`, body);
  }
};
