// @generated
// fingerprint: sha256:36500ed82701b91b4dc75a1959ab83a0af2465b59d302f1893d3409968508995
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerConversionGoalsRequest, MutateCustomerConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerConversionGoalService. Do not edit by hand.
export const customerConversionGoalService = {
  mutateCustomerConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCustomerConversionGoalsRequest, "customerId">): Promise<MutateCustomerConversionGoalsResponse> {
    return client.post<MutateCustomerConversionGoalsResponse>(`/v25/customers/${customerId}/customerConversionGoals:mutate`, body);
  }
};
