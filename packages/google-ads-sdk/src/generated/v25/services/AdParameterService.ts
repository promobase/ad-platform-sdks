// @generated
// fingerprint: sha256:2aa26f5895b92f6f5d73342a2d98415b3a519cf0a04226e891840820e8918245
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAdParametersRequest, MutateAdParametersResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.AdParameterService. Do not edit by hand.
export const adParameterService = {
  mutateAdParameters(client: HttpClient, customerId: string, body: Omit<MutateAdParametersRequest, "customerId">): Promise<MutateAdParametersResponse> {
    return client.post<MutateAdParametersResponse>(`/v25/customers/${customerId}/adParameters:mutate`, body);
  }
};
