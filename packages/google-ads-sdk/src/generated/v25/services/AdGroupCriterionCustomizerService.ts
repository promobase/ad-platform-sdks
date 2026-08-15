// @generated
// fingerprint: sha256:b5515cef027b4082330c864d38605af835e4681b5959a1868fe32a9eed6aa4fa
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupCriterionCustomizersRequest, MutateAdGroupCriterionCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupCriterionCustomizerService. Do not edit by hand.
export const adGroupCriterionCustomizerService = {
  mutateAdGroupCriterionCustomizers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriterionCustomizersRequest, "customerId">): Promise<MutateAdGroupCriterionCustomizersResponse> {
    return client.post<MutateAdGroupCriterionCustomizersResponse>(`/v25/customers/${customerId}/AdGroupCriterionCustomizers:mutate`, body);
  }
};
