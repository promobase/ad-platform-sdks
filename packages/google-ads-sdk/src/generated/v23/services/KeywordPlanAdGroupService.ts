import type { MutateKeywordPlanAdGroupsRequest, MutateKeywordPlanAdGroupsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanAdGroupService. Do not edit by hand.
export const keywordPlanAdGroupService = {
  mutateKeywordPlanAdGroups(client: HttpClient, customerId: string, body: Omit<MutateKeywordPlanAdGroupsRequest, "customerId">): Promise<MutateKeywordPlanAdGroupsResponse> {
    return client.post<MutateKeywordPlanAdGroupsResponse>(`/v23/customers/${customerId}/keywordPlanAdGroups:mutate`, body);
  }
};
