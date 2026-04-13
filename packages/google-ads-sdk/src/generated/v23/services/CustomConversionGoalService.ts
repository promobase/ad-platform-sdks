import type { MutateCustomConversionGoalsRequest, MutateCustomConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomConversionGoalService. Do not edit by hand.
export const customConversionGoalService = {
  mutateCustomConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCustomConversionGoalsRequest, "customerId">): Promise<MutateCustomConversionGoalsResponse> {
    return client.post<MutateCustomConversionGoalsResponse>(`/v23/customers/${customerId}/customConversionGoals:mutate`, body);
  }
};
