import type { MutateUserListCustomerTypesRequest, MutateUserListCustomerTypesResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.UserListCustomerTypeService. Do not edit by hand.
export const userListCustomerTypeService = {
  mutateUserListCustomerTypes(client: HttpClient, customerId: string, body: Omit<MutateUserListCustomerTypesRequest, "customerId">): Promise<MutateUserListCustomerTypesResponse> {
    return client.post<MutateUserListCustomerTypesResponse>(`/v23/customers/${customerId}/userListCustomerTypes:mutate`, body);
  }
};
