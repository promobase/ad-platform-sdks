// @generated
// fingerprint: sha256:46790d9e21ea71575d948a5c14b26293b2391972ed67429c5f250a8dbe771f90
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateGoalsRequest, MutateGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.GoalService. Do not edit by hand.
export const goalService = {
  mutateGoals(client: HttpClient, customerId: string, body: Omit<MutateGoalsRequest, "customerId">): Promise<MutateGoalsResponse> {
    return client.post<MutateGoalsResponse>(`/v23/customers/${customerId}/Goals:mutate`, body);
  }
};
