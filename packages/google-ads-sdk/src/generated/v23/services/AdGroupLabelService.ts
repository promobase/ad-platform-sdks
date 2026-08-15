// @generated
// fingerprint: sha256:177b10136741a42f07af434dfba4e143c108ae861adacf3f4ae7e629bb71bf8c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupLabelsRequest, MutateAdGroupLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupLabelService. Do not edit by hand.
export const adGroupLabelService = {
  mutateAdGroupLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupLabelsRequest, "customerId">): Promise<MutateAdGroupLabelsResponse> {
    return client.post<MutateAdGroupLabelsResponse>(`/v23/customers/${customerId}/adGroupLabels:mutate`, body);
  }
};
