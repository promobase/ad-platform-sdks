import type { MutateCustomizerAttributesRequest, MutateCustomizerAttributesResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomizerAttributeService. Do not edit by hand.
export const customizerAttributeService = {
  mutateCustomizerAttributes(client: HttpClient, customerId: string, body: Omit<MutateCustomizerAttributesRequest, "customerId">): Promise<MutateCustomizerAttributesResponse> {
    return client.post<MutateCustomizerAttributesResponse>(`/v25/customers/${customerId}/customizerAttributes:mutate`, body);
  }
};
