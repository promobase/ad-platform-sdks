// @generated
// fingerprint: sha256:2e60c7b4edfdcf2c60cb838b1b29a6e4e50b0eda420cfd564d9143d11add2740
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CreateCustomerClientRequest, CreateCustomerClientResponse, ListAccessibleCustomersRequest, ListAccessibleCustomersResponse, MutateCustomerRequest, MutateCustomerResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerService. Do not edit by hand.
export const customerService = {
  mutateCustomer(client: HttpClient, customerId: string, body: Omit<MutateCustomerRequest, "customerId">): Promise<MutateCustomerResponse> {
    return client.post<MutateCustomerResponse>(`/v25/customers/${customerId}:mutate`, body);
  },

  listAccessibleCustomers(client: HttpClient): Promise<ListAccessibleCustomersResponse> {
    return client.get<ListAccessibleCustomersResponse>(`/v25/customers:listAccessibleCustomers`);
  },

  createCustomerClient(client: HttpClient, customerId: string, body: Omit<CreateCustomerClientRequest, "customerId">): Promise<CreateCustomerClientResponse> {
    return client.post<CreateCustomerClientResponse>(`/v25/customers/${customerId}:createCustomerClient`, body);
  }
};
