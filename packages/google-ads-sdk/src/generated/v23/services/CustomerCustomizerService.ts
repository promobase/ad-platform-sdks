import type { MutateCustomerCustomizersRequest, MutateCustomerCustomizersResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomerCustomizerService. Do not edit by hand.
export const customerCustomizerService = {
  mutateCustomerCustomizers(client: HttpClient, customerId: string, body: Omit<MutateCustomerCustomizersRequest, "customerId">): Promise<MutateCustomerCustomizersResponse> {
    return client.post<MutateCustomerCustomizersResponse>(`/v23/customers/${customerId}/CustomerCustomizers:mutate`, body);
  }
};
