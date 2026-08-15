// @generated
// fingerprint: sha256:4bf78c65a834aa94bb7e2b979b98ad231452226ec76be50ba04bdcd0084a0d2c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateExperimentArmsRequest, MutateExperimentArmsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ExperimentArmService. Do not edit by hand.
export const experimentArmService = {
  mutateExperimentArms(client: HttpClient, customerId: string, body: Omit<MutateExperimentArmsRequest, "customerId">): Promise<MutateExperimentArmsResponse> {
    return client.post<MutateExperimentArmsResponse>(`/v25/customers/${customerId}/experimentArms:mutate`, body);
  }
};
