import type { MutateBillingSetupRequest, MutateBillingSetupResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BillingSetupService. Do not edit by hand.
export const billingSetupService = {
  mutateBillingSetup(client: HttpClient, customerId: string, body: Omit<MutateBillingSetupRequest, "customerId">): Promise<MutateBillingSetupResponse> {
    return client.post<MutateBillingSetupResponse>(`/v23/customers/${customerId}/billingSetups:mutate`, body);
  }
};
