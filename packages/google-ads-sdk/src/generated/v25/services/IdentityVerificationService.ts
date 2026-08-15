// @generated
// fingerprint: sha256:c9d8e0013e6aa8128f595b7d49f7128edab72cdf1936e46d4b4ba4862b62a428
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GetIdentityVerificationRequest, GetIdentityVerificationResponse, StartIdentityVerificationRequest } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.IdentityVerificationService. Do not edit by hand.
export const identityVerificationService = {
  startIdentityVerification(client: HttpClient, customerId: string, body: Omit<StartIdentityVerificationRequest, "customerId">): Promise<Record<string, never>> {
    return client.post<Record<string, never>>(`/v25/customers/${customerId}:startIdentityVerification`, body);
  },

  getIdentityVerification(client: HttpClient, customerId: string): Promise<GetIdentityVerificationResponse> {
    return client.get<GetIdentityVerificationResponse>(`/v25/customers/${customerId}/getIdentityVerification`);
  }
};
