// @generated
// fingerprint: sha256:303a41fbdac8f9589ebf2a70b51ee3a6f4e1ee969bcfca46e158d878e9c0df2c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateUserListsRequest, MutateUserListsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.UserListService. Do not edit by hand.
export const userListService = {
  mutateUserLists(client: HttpClient, customerId: string, body: Omit<MutateUserListsRequest, "customerId">): Promise<MutateUserListsResponse> {
    return client.post<MutateUserListsResponse>(`/v25/customers/${customerId}/userLists:mutate`, body);
  }
};
