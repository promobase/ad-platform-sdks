// @generated
// fingerprint: sha256:84b6efb8dbb89a4743d8cc4ea470251dc6efe03ef68663b5f7d23b6163caf943
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupCriterionCustomizersRequest, MutateAdGroupCriterionCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupCriterionCustomizerService. Do not edit by hand.
export const adGroupCriterionCustomizerService = {
  mutateAdGroupCriterionCustomizers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCriterionCustomizersRequest, "customerId">): Promise<MutateAdGroupCriterionCustomizersResponse> {
    return client.post<MutateAdGroupCriterionCustomizersResponse>(`/v23/customers/${customerId}/AdGroupCriterionCustomizers:mutate`, body);
  }
};
