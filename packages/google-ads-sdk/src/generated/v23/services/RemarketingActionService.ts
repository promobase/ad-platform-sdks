import type { MutateRemarketingActionsRequest, MutateRemarketingActionsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.RemarketingActionService. Do not edit by hand.
export const remarketingActionService = {
  mutateRemarketingActions(client: HttpClient, customerId: string, body: Omit<MutateRemarketingActionsRequest, "customerId">): Promise<MutateRemarketingActionsResponse> {
    return client.post<MutateRemarketingActionsResponse>(`/v23/customers/${customerId}/remarketingActions:mutate`, body);
  }
};
