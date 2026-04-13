import type { MutateAdParametersRequest, MutateAdParametersResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AdParameterService. Do not edit by hand.
export const adParameterService = {
  mutateAdParameters(client: HttpClient, customerId: string, body: Omit<MutateAdParametersRequest, "customerId">): Promise<MutateAdParametersResponse> {
    return client.post<MutateAdParametersResponse>(`/v23/customers/${customerId}/adParameters:mutate`, body);
  }
};
