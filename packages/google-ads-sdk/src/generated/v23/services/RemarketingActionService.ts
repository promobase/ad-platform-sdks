// @generated
// fingerprint: sha256:e42c6ea5e4da144b4d9dcbe645a381a7aef949cb571972ee118f9069ae5b2a11
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateRemarketingActionsRequest, MutateRemarketingActionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.RemarketingActionService. Do not edit by hand.
export const remarketingActionService = {
  mutateRemarketingActions(client: HttpClient, customerId: string, body: Omit<MutateRemarketingActionsRequest, "customerId">): Promise<MutateRemarketingActionsResponse> {
    return client.post<MutateRemarketingActionsResponse>(`/v23/customers/${customerId}/remarketingActions:mutate`, body);
  }
};
