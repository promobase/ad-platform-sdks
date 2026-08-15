// @generated
// fingerprint: sha256:c2911c6e57f0125de4907e14bb5bbe2c759cd97cc30799294745bc7e18c5880a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupLabelsRequest, MutateAdGroupLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupLabelService. Do not edit by hand.
export const adGroupLabelService = {
  mutateAdGroupLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupLabelsRequest, "customerId">): Promise<MutateAdGroupLabelsResponse> {
    return client.post<MutateAdGroupLabelsResponse>(`/v25/customers/${customerId}/adGroupLabels:mutate`, body);
  }
};
