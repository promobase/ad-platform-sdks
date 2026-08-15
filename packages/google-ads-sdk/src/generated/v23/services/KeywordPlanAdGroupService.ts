// @generated
// fingerprint: sha256:fe6fc0fdac4bebb8636dfbab9d8aa3a3dca78a33c95ad988857a73c959821fa5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateKeywordPlanAdGroupsRequest, MutateKeywordPlanAdGroupsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanAdGroupService. Do not edit by hand.
export const keywordPlanAdGroupService = {
  mutateKeywordPlanAdGroups(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanAdGroupsRequest, "customerId">): Promise<MutateKeywordPlanAdGroupsResponse> {
    return client.post<MutateKeywordPlanAdGroupsResponse>(`/v23/customers/${customerId}/keywordPlanAdGroups:mutate`, body);
  }
};
