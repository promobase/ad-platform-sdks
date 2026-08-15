// @generated
// fingerprint: sha256:799ec4468f9ec3a02d08b12751aaf22c8e1627ee258418b43155c77cc42ba0df
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupCriterionLabelsRequest, MutateAdGroupCriterionLabelsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupCriterionLabelService. Do not edit by hand.
export const adGroupCriterionLabelService = {
  mutateAdGroupCriterionLabels(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriterionLabelsRequest, "customerId">): Promise<MutateAdGroupCriterionLabelsResponse> {
    return client.post<MutateAdGroupCriterionLabelsResponse>(`/v25/customers/${customerId}/adGroupCriterionLabels:mutate`, body);
  }
};
