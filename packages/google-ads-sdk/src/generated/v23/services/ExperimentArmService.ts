// @generated
// fingerprint: sha256:482c271853d645a70ab928fd9ad791bc2014f5430045825969596ef8b2c767ee
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateExperimentArmsRequest, MutateExperimentArmsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ExperimentArmService. Do not edit by hand.
export const experimentArmService = {
  mutateExperimentArms(client: HttpClient, customerId: string, body: Omit<MutateExperimentArmsRequest, "customerId">): Promise<MutateExperimentArmsResponse> {
    return client.post<MutateExperimentArmsResponse>(`/v23/customers/${customerId}/experimentArms:mutate`, body);
  }
};
