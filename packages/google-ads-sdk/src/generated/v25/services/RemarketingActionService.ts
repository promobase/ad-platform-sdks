// @generated
// fingerprint: sha256:16886a3a4743ebbb631638d58ed0bc89e3ee448116f7dbafa5397446587779ab
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateRemarketingActionsRequest, MutateRemarketingActionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.RemarketingActionService. Do not edit by hand.
export const remarketingActionService = {
  mutateRemarketingActions(client: HttpClient, customerId: string, body: Omit<MutateRemarketingActionsRequest, "customerId">): Promise<MutateRemarketingActionsResponse> {
    return client.post<MutateRemarketingActionsResponse>(`/v25/customers/${customerId}/remarketingActions:mutate`, body);
  }
};
