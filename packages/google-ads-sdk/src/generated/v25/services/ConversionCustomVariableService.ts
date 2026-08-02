import type { MutateConversionCustomVariablesRequest, MutateConversionCustomVariablesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionCustomVariableService. Do not edit by hand.
export const conversionCustomVariableService = {
  mutateConversionCustomVariables(client: HttpClient, customerId: string, body: Omit<MutateConversionCustomVariablesRequest, "customerId">): Promise<MutateConversionCustomVariablesResponse> {
    return client.post<MutateConversionCustomVariablesResponse>(`/v25/customers/${customerId}/conversionCustomVariables:mutate`, body);
  }
};
