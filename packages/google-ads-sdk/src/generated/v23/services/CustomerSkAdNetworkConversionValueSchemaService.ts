import type { MutateCustomerSkAdNetworkConversionValueSchemaRequest, MutateCustomerSkAdNetworkConversionValueSchemaResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerSkAdNetworkConversionValueSchemaService. Do not edit by hand.
export const customerSkAdNetworkConversionValueSchemaService = {
  mutateCustomerSkAdNetworkConversionValueSchema(client: HttpClient, customerId: string, body: Omit<MutateCustomerSkAdNetworkConversionValueSchemaRequest, "customerId">): Promise<MutateCustomerSkAdNetworkConversionValueSchemaResponse> {
    return client.post<MutateCustomerSkAdNetworkConversionValueSchemaResponse>(`/v23/customers/${customerId}/customerSkAdNetworkConversionValueSchemas:mutate`, body);
  }
};
