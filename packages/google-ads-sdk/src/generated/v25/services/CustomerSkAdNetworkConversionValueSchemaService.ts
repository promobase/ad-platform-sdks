// @generated
// fingerprint: sha256:48af76f77e82e33566cf31bef6ad76059517c83b868b8247531ec554943cc0a9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomerSkAdNetworkConversionValueSchemaRequest, MutateCustomerSkAdNetworkConversionValueSchemaResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerSkAdNetworkConversionValueSchemaService. Do not edit by hand.
export const customerSkAdNetworkConversionValueSchemaService = {
  mutateCustomerSkAdNetworkConversionValueSchema(client: HttpClient, customerId: string, body: Omit<MutateCustomerSkAdNetworkConversionValueSchemaRequest, "customerId">): Promise<MutateCustomerSkAdNetworkConversionValueSchemaResponse> {
    return client.post<MutateCustomerSkAdNetworkConversionValueSchemaResponse>(`/v25/customers/${customerId}/customerSkAdNetworkConversionValueSchemas:mutate`, body);
  }
};
