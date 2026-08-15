// @generated
// fingerprint: sha256:1cab416d91b5ee889c19dfc7780d11363750878d8d0b1f138992efcf8531c0cc
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateLabelsRequest, MutateLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.LabelService. Do not edit by hand.
export const labelService = {
  mutateLabels(client: HttpClient, customerId: string, body: Omit<MutateLabelsRequest, "customerId">): Promise<MutateLabelsResponse> {
    return client.post<MutateLabelsResponse>(`/v25/customers/${customerId}/labels:mutate`, body);
  }
};
