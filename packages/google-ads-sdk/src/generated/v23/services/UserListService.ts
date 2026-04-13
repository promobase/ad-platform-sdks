import type { MutateUserListsRequest, MutateUserListsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.UserListService. Do not edit by hand.
export const userListService = {
  mutateUserLists(client: HttpClient, customerId: string, body: Omit<MutateUserListsRequest, "customerId">): Promise<MutateUserListsResponse> {
    return client.post<MutateUserListsResponse>(`/v23/customers/${customerId}/userLists:mutate`, body);
  }
};
