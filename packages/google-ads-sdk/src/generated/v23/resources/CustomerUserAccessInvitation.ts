import type { AccessInvitationStatus, AccessRole } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerUserAccessInvitation. Do not edit by hand.
export interface CustomerUserAccessInvitation {
  resourceName?: string;
  invitationId?: string;
  accessRole?: AccessRole;
  emailAddress?: string;
  creationDateTime?: string;
  invitationStatus?: AccessInvitationStatus;
}
