import type { MutateCustomerSkAdNetworkConversionValueSchemaRequest, MutateCustomerSkAdNetworkConversionValueSchemaResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomerSkAdNetworkConversionValueSchemaService. Do not edit by hand.
export const customerSkAdNetworkConversionValueSchemaService = {
  mutateCustomerSkAdNetworkConversionValueSchema(client: HttpClient, customerId: string, body: Omit<MutateCustomerSkAdNetworkConversionValueSchemaRequest, "customerId">): Promise<MutateCustomerSkAdNetworkConversionValueSchemaResponse> {
    return client.post<MutateCustomerSkAdNetworkConversionValueSchemaResponse>(`/v25/customers/${customerId}/customerSkAdNetworkConversionValueSchemas:mutate`, body);
  }
};
