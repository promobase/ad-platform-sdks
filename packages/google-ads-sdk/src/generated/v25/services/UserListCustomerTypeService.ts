// @generated
// fingerprint: sha256:a3342c41fafc87de9972685028601963dc3bf3b5884415405272fb7c8d90883a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateUserListCustomerTypesRequest, MutateUserListCustomerTypesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.UserListCustomerTypeService. Do not edit by hand.
export const userListCustomerTypeService = {
  mutateUserListCustomerTypes(client: HttpClient, customerId: string, body: Omit<MutateUserListCustomerTypesRequest, "customerId">): Promise<MutateUserListCustomerTypesResponse> {
    return client.post<MutateUserListCustomerTypesResponse>(`/v25/customers/${customerId}/userListCustomerTypes:mutate`, body);
  }
};
