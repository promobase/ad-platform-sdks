import type { MutateConversionCustomVariablesRequest, MutateConversionCustomVariablesResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionCustomVariableService. Do not edit by hand.
export const conversionCustomVariableService = {
  mutateConversionCustomVariables(client: HttpClient, customerId: string, body: Omit<MutateConversionCustomVariablesRequest, "customerId">): Promise<MutateConversionCustomVariablesResponse> {
    return client.post<MutateConversionCustomVariablesResponse>(`/v23/customers/${customerId}/conversionCustomVariables:mutate`, body);
  }
};
