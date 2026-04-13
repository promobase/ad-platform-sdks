import type { GetIdentityVerificationRequest, GetIdentityVerificationResponse, StartIdentityVerificationRequest } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.IdentityVerificationService. Do not edit by hand.
export const identityVerificationService = {
  startIdentityVerification(client: HttpClient, customerId: string, body: Omit<StartIdentityVerificationRequest, "customerId">): Promise<Record<string, never>> {
    return client.post<Record<string, never>>(`/v23/customers/${customerId}:startIdentityVerification`, body);
  },

  getIdentityVerification(client: HttpClient, customerId: string): Promise<GetIdentityVerificationResponse> {
    return client.get<GetIdentityVerificationResponse>(`/v23/customers/${customerId}/getIdentityVerification`);
  }
};
