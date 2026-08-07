import type { MutateCustomerConversionGoalsRequest, MutateCustomerConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerConversionGoalService. Do not edit by hand.
export const customerConversionGoalService = {
  mutateCustomerConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCustomerConversionGoalsRequest, "customerId">): Promise<MutateCustomerConversionGoalsResponse> {
    return client.post<MutateCustomerConversionGoalsResponse>(`/v25/customers/${customerId}/customerConversionGoals:mutate`, body);
  }
};
