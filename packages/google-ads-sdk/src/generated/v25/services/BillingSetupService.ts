// @generated
// fingerprint: sha256:2ee69a46873318fd1c51550440bfbf8b3f7e3e56e1a978a0c42543f454f5d560
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateBillingSetupRequest, MutateBillingSetupResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BillingSetupService. Do not edit by hand.
export const billingSetupService = {
  mutateBillingSetup(client: HttpClient, customerId: string, body: Omit<MutateBillingSetupRequest, "customerId">): Promise<MutateBillingSetupResponse> {
    return client.post<MutateBillingSetupResponse>(`/v25/customers/${customerId}/billingSetups:mutate`, body);
  }
};
