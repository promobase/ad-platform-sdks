import type { IdentityVerificationProgramStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.services.IdentityVerificationProgress. Do not edit by hand.
export interface IdentityVerificationProgress {
  programStatus?: IdentityVerificationProgramStatus;
  invitationLinkExpirationTime?: string;
  actionUrl?: string;
}
