// @generated
// fingerprint: sha256:f97f58bad1757702f4022420ec3f8d263f1b7388b1594482cc1c4b45c77a26aa
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GetIdentityVerificationRequest, GetIdentityVerificationResponse, StartIdentityVerificationRequest } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.IdentityVerificationService. Do not edit by hand.
export const identityVerificationService = {
  startIdentityVerification(client: HttpClient, customerId: string, body: Omit<StartIdentityVerificationRequest, "customerId">): Promise<Record<string, never>> {
    return client.post<Record<string, never>>(`/v23/customers/${customerId}:startIdentityVerification`, body);
  },

  getIdentityVerification(client: HttpClient, customerId: string): Promise<GetIdentityVerificationResponse> {
    return client.get<GetIdentityVerificationResponse>(`/v23/customers/${customerId}/getIdentityVerification`);
  }
};
