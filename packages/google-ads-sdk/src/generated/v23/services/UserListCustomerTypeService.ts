// @generated
// fingerprint: sha256:2402b25f91cdc95f809178727b3d47915d8e1add2da0cb9f06f61a001181132e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateUserListCustomerTypesRequest, MutateUserListCustomerTypesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.UserListCustomerTypeService. Do not edit by hand.
export const userListCustomerTypeService = {
  mutateUserListCustomerTypes(client: HttpClient, customerId: string, body: Omit<MutateUserListCustomerTypesRequest, "customerId">): Promise<MutateUserListCustomerTypesResponse> {
    return client.post<MutateUserListCustomerTypesResponse>(`/v23/customers/${customerId}/userListCustomerTypes:mutate`, body);
  }
};
