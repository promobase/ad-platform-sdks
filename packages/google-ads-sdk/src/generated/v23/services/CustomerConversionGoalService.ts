// @generated
// fingerprint: sha256:c838902634af1ed2a04dd1a0adfc44e32948fe0ee7cc3a620418a9aea48da4d7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerConversionGoalsRequest, MutateCustomerConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerConversionGoalService. Do not edit by hand.
export const customerConversionGoalService = {
  mutateCustomerConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCustomerConversionGoalsRequest, "customerId">): Promise<MutateCustomerConversionGoalsResponse> {
    return client.post<MutateCustomerConversionGoalsResponse>(`/v23/customers/${customerId}/customerConversionGoals:mutate`, body);
  }
};
