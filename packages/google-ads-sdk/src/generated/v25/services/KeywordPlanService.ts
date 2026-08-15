// @generated
// fingerprint: sha256:fd703de562cecc60deefe3cc11b65e82ecaa19248dae5b352f3f68078941883f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlansRequest, MutateKeywordPlansResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.KeywordPlanService. Do not edit by hand.
export const keywordPlanService = {
  mutateKeywordPlans(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlansRequest, "customerId">): Promise<MutateKeywordPlansResponse> {
    return client.post<MutateKeywordPlansResponse>(`/v25/customers/${customerId}/keywordPlans:mutate`, body);
  }
};
