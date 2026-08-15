// @generated
// fingerprint: sha256:dc3b8dc4be103caaa4c89be3027e8d5e9fcdfc47597429d07eca470bcc123469
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConfigureCustomerLifecycleGoalsRequest, ConfigureCustomerLifecycleGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerLifecycleGoalService. Do not edit by hand.
export const customerLifecycleGoalService = {
  configureCustomerLifecycleGoals(client: HttpClient, customerId: string, body: Omit<ConfigureCustomerLifecycleGoalsRequest, "customerId">): Promise<ConfigureCustomerLifecycleGoalsResponse> {
    return client.post<ConfigureCustomerLifecycleGoalsResponse>(`/v23/customers/${customerId}/customerLifecycleGoal:configureCustomerLifecycleGoals`, body);
  }
};
