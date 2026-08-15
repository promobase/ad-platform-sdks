// @generated
// fingerprint: sha256:20e2d8d34bfcb63e614c4359cbaa6cd6630786fbe99ea4bb07a3221c7712c96d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomConversionGoalsRequest, MutateCustomConversionGoalsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomConversionGoalService. Do not edit by hand.
export const customConversionGoalService = {
  mutateCustomConversionGoals(client: HttpClient, customerId: string, body: Omit<MutateCustomConversionGoalsRequest, "customerId">): Promise<MutateCustomConversionGoalsResponse> {
    return client.post<MutateCustomConversionGoalsResponse>(`/v23/customers/${customerId}/customConversionGoals:mutate`, body);
  }
};
