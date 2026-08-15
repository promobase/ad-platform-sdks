// @generated
// fingerprint: sha256:1049ac7dbe163e49b6eca752023d11c82efdc72146130c2dad905f577275095c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupCriterionLabelsRequest, MutateAdGroupCriterionLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupCriterionLabelService. Do not edit by hand.
export const adGroupCriterionLabelService = {
  mutateAdGroupCriterionLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriterionLabelsRequest, "customerId">): Promise<MutateAdGroupCriterionLabelsResponse> {
    return client.post<MutateAdGroupCriterionLabelsResponse>(`/v23/customers/${customerId}/adGroupCriterionLabels:mutate`, body);
  }
};
