// @generated
// fingerprint: sha256:48147614fa02700f2ae06b9d57f4c57cac08b2e1a46b312bb66ccbb797f9ade0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionCustomVariablesRequest, MutateConversionCustomVariablesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionCustomVariableService. Do not edit by hand.
export const conversionCustomVariableService = {
  mutateConversionCustomVariables(client: HttpClient, customerId: string, body: Omit<MutateConversionCustomVariablesRequest, "customerId">): Promise<MutateConversionCustomVariablesResponse> {
    return client.post<MutateConversionCustomVariablesResponse>(`/v25/customers/${customerId}/conversionCustomVariables:mutate`, body);
  }
};
