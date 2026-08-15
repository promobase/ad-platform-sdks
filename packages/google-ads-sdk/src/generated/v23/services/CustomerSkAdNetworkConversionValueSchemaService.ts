// @generated
// fingerprint: sha256:93ccadbcadaa6ddea3c994f7f59eb9c6d8f88dbfb69e1bba13900ab3210b0760
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerSkAdNetworkConversionValueSchemaRequest, MutateCustomerSkAdNetworkConversionValueSchemaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerSkAdNetworkConversionValueSchemaService. Do not edit by hand.
export const customerSkAdNetworkConversionValueSchemaService = {
  mutateCustomerSkAdNetworkConversionValueSchema(client: HttpClient, customerId: string, body: Omit<MutateCustomerSkAdNetworkConversionValueSchemaRequest, "customerId">): Promise<MutateCustomerSkAdNetworkConversionValueSchemaResponse> {
    return client.post<MutateCustomerSkAdNetworkConversionValueSchemaResponse>(`/v23/customers/${customerId}/customerSkAdNetworkConversionValueSchemas:mutate`, body);
  }
};
