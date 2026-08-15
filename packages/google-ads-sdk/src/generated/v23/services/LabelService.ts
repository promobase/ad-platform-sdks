// @generated
// fingerprint: sha256:ee7c326ed4712de27d81eef7fb12e074f772bbccccb7edbddf6231a2ff1af4c4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateLabelsRequest, MutateLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.LabelService. Do not edit by hand.
export const labelService = {
  mutateLabels(client: HttpClient, customerId: string, body: Omit<MutateLabelsRequest, "customerId">): Promise<MutateLabelsResponse> {
    return client.post<MutateLabelsResponse>(`/v23/customers/${customerId}/labels:mutate`, body);
  }
};
