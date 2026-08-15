// @generated
// fingerprint: sha256:698b35243b634cf586f81bec5ee20304d227634ee0b33206da18702d48a7e2b7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupAdLabelsRequest, MutateAdGroupAdLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupAdLabelService. Do not edit by hand.
export const adGroupAdLabelService = {
  mutateAdGroupAdLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupAdLabelsRequest, "customerId">): Promise<MutateAdGroupAdLabelsResponse> {
    return client.post<MutateAdGroupAdLabelsResponse>(`/v25/customers/${customerId}/adGroupAdLabels:mutate`, body);
  }
};
