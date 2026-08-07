import type { MutateUserListCustomerTypesRequest, MutateUserListCustomerTypesResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.UserListCustomerTypeService. Do not edit by hand.
export const userListCustomerTypeService = {
  mutateUserListCustomerTypes(client: HttpClient, customerId: string, body: Omit<MutateUserListCustomerTypesRequest, "customerId">): Promise<MutateUserListCustomerTypesResponse> {
    return client.post<MutateUserListCustomerTypesResponse>(`/v25/customers/${customerId}/userListCustomerTypes:mutate`, body);
  }
};
