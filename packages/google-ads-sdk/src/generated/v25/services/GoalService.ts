import type { MutateGoalsRequest, MutateGoalsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.GoalService. Do not edit by hand.
export const goalService = {
  mutateGoals(client: HttpClient, customerId: string, body: Omit<MutateGoalsRequest, "customerId">): Promise<MutateGoalsResponse> {
    return client.post<MutateGoalsResponse>(`/v25/customers/${customerId}/Goals:mutate`, body);
  }
};
