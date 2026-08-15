// @generated
// fingerprint: sha256:f28f0be5fa4a4ea1cda80c29f0b6df8bb5687f31fd83a292837e4916fb5c2f61
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionCustomVariablesRequest, MutateConversionCustomVariablesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionCustomVariableService. Do not edit by hand.
export const conversionCustomVariableService = {
  mutateConversionCustomVariables(client: HttpClient, customerId: string, body: Omit<MutateConversionCustomVariablesRequest, "customerId">): Promise<MutateConversionCustomVariablesResponse> {
    return client.post<MutateConversionCustomVariablesResponse>(`/v23/customers/${customerId}/conversionCustomVariables:mutate`, body);
  }
};
