import type { MutateBillingSetupRequest, MutateBillingSetupResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BillingSetupService. Do not edit by hand.
export const billingSetupService = {
  mutateBillingSetup(client: HttpClient, customerId: string, body: Omit<MutateBillingSetupRequest, "customerId">): Promise<MutateBillingSetupResponse> {
    return client.post<MutateBillingSetupResponse>(`/v25/customers/${customerId}/billingSetups:mutate`, body);
  }
};
