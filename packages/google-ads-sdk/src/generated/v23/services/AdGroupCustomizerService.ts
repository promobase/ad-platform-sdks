// @generated
// fingerprint: sha256:a64b3a3a226724b89ab8ad3636d36fc3cf79e6a9220002806bccfc6f56f4ee3a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdGroupCustomizersRequest, MutateAdGroupCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdGroupCustomizerService. Do not edit by hand.
export const adGroupCustomizerService = {
  mutateAdGroupCustomizers(client: HttpClient, customerId: string, body: Omit<MutateAdGroupCustomizersRequest, "customerId">): Promise<MutateAdGroupCustomizersResponse> {
    return client.post<MutateAdGroupCustomizersResponse>(`/v23/customers/${customerId}/adGroupCustomizers:mutate`, body);
  }
};
