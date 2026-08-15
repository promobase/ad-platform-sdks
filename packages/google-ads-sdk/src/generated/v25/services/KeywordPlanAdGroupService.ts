// @generated
// fingerprint: sha256:1b9c2075de33fd5b3e3a02b1ca89719f8ac1631ba30b90ecccbd94436322b531
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlanAdGroupsRequest, MutateKeywordPlanAdGroupsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.KeywordPlanAdGroupService. Do not edit by hand.
export const keywordPlanAdGroupService = {
  mutateKeywordPlanAdGroups(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanAdGroupsRequest, "customerId">): Promise<MutateKeywordPlanAdGroupsResponse> {
    return client.post<MutateKeywordPlanAdGroupsResponse>(`/v25/customers/${customerId}/keywordPlanAdGroups:mutate`, body);
  }
};
