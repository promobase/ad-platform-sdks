import type { MutateAdParametersRequest, MutateAdParametersResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdParameterService. Do not edit by hand.
export const adParameterService = {
  mutateAdParameters(client: HttpClient, customerId: string, body: Omit<MutateAdParametersRequest, "customerId">): Promise<MutateAdParametersResponse> {
    return client.post<MutateAdParametersResponse>(`/v25/customers/${customerId}/adParameters:mutate`, body);
  }
};
