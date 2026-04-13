import type { MutateExperimentArmsRequest, MutateExperimentArmsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ExperimentArmService. Do not edit by hand.
export const experimentArmService = {
  mutateExperimentArms(client: HttpClient, customerId: string, body: Omit<MutateExperimentArmsRequest, "customerId">): Promise<MutateExperimentArmsResponse> {
    return client.post<MutateExperimentArmsResponse>(`/v23/customers/${customerId}/experimentArms:mutate`, body);
  }
};
