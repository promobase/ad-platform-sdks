// @generated
// fingerprint: sha256:fc139f93c77ff4b6a58edc338103cec8319bfde0e2ad3bf9ce0f7ca3e120224c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomConversionGoalsRequest, MutateCustomConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomConversionGoalService. Do not edit by hand.
export const customConversionGoalService = {
  mutateCustomConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCustomConversionGoalsRequest, "customerId">): Promise<MutateCustomConversionGoalsResponse> {
    return client.post<MutateCustomConversionGoalsResponse>(`/v25/customers/${customerId}/customConversionGoals:mutate`, body);
  }
};
