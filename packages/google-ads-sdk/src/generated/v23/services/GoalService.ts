import type { MutateGoalsRequest, MutateGoalsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.GoalService. Do not edit by hand.
export const goalService = {
  mutateGoals(client: HttpClient, customerId: string, body: Omit<MutateGoalsRequest, "customerId">): Promise<MutateGoalsResponse> {
    return client.post<MutateGoalsResponse>(`/v23/customers/${customerId}/Goals:mutate`, body);
  }
};
