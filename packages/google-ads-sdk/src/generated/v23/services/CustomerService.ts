// @generated
// fingerprint: sha256:906961ea58e6bb6f81ac9ff1a8f99169cea53027efabf6fd3d40013fc141a4c1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CreateCustomerClientRequest, CreateCustomerClientResponse, ListAccessibleCustomersRequest, ListAccessibleCustomersResponse, MutateCustomerRequest, MutateCustomerResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerService. Do not edit by hand.
export const customerService = {
  mutateCustomer(client: HttpClient, customerId: string, body: Omit<MutateCustomerRequest, "customerId">): Promise<MutateCustomerResponse> {
    return client.post<MutateCustomerResponse>(`/v23/customers/${customerId}:mutate`, body);
  },

  listAccessibleCustomers(client: HttpClient): Promise<ListAccessibleCustomersResponse> {
    return client.get<ListAccessibleCustomersResponse>(`/v23/customers:listAccessibleCustomers`);
  },

  createCustomerClient(client: HttpClient, customerId: string, body: Omit<CreateCustomerClientRequest, "customerId">): Promise<CreateCustomerClientResponse> {
    return client.post<CreateCustomerClientResponse>(`/v23/customers/${customerId}:createCustomerClient`, body);
  }
};
