// @generated
// fingerprint: sha256:bd0f9b25c9bf5f4a3a6f6da6c68b8d196ae573344faa3b3ac90cb3c9140f26e7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupCustomizersRequest, MutateAdGroupCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdGroupCustomizerService. Do not edit by hand.
export const adGroupCustomizerService = {
  mutateAdGroupCustomizers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCustomizersRequest, "customerId">): Promise<MutateAdGroupCustomizersResponse> {
    return client.post<MutateAdGroupCustomizersResponse>(`/v25/customers/${customerId}/adGroupCustomizers:mutate`, body);
  }
};
