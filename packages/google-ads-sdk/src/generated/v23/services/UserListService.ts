// @generated
// fingerprint: sha256:080c25866c1f999cc6e23b0f643ecb3c4d8d1d0311c94249299bc1717383e5f2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateUserListsRequest, MutateUserListsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.UserListService. Do not edit by hand.
export const userListService = {
  mutateUserLists(client: HttpClient, customerId: string, body: Omit<MutateUserListsRequest, "customerId">): Promise<MutateUserListsResponse> {
    return client.post<MutateUserListsResponse>(`/v23/customers/${customerId}/userLists:mutate`, body);
  }
};
