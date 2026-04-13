import type { ConfigureCustomerLifecycleGoalsRequest, ConfigureCustomerLifecycleGoalsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerLifecycleGoalService. Do not edit by hand.
export const customerLifecycleGoalService = {
  configureCustomerLifecycleGoals(client: HttpClient, customerId: string, body: Omit<ConfigureCustomerLifecycleGoalsRequest, "customerId">): Promise<ConfigureCustomerLifecycleGoalsResponse> {
    return client.post<ConfigureCustomerLifecycleGoalsResponse>(`/v23/customers/${customerId}/customerLifecycleGoal:configureCustomerLifecycleGoals`, body);
  }
};
