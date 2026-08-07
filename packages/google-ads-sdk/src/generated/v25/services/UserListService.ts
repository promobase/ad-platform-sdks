import type { MutateUserListsRequest, MutateUserListsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.UserListService. Do not edit by hand.
export const userListService = {
  mutateUserLists(client: HttpClient, customerId: string, body: Omit<MutateUserListsRequest, "customerId">): Promise<MutateUserListsResponse> {
    return client.post<MutateUserListsResponse>(`/v25/customers/${customerId}/userLists:mutate`, body);
  }
};
