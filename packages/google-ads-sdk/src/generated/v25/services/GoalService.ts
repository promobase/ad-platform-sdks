// @generated
// fingerprint: sha256:145756386cd665b4e6498cbe2df8da4dc788b11f41737c275df44a485768fe74
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateGoalsRequest, MutateGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.GoalService. Do not edit by hand.
export const goalService = {
  mutateGoals(client: HttpClient, customerId: string, body: Omit<MutateGoalsRequest, "customerId">): Promise<MutateGoalsResponse> {
    return client.post<MutateGoalsResponse>(`/v25/customers/${customerId}/Goals:mutate`, body);
  }
};
