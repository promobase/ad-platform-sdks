// @generated
// fingerprint: sha256:501d82d40a4c6f8de3a454ce94f47fc20ec9c48dfd1cdd0df4f615d61b849b9c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccessInvitationStatus, AccessRole } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CustomerUserAccessInvitation. Do not edit by hand.
export interface CustomerUserAccessInvitation {
  resourceName?: string;
  invitationId?: string;
  accessRole?: AccessRole;
  emailAddress?: string;
  creationDateTime?: string;
  invitationStatus?: AccessInvitationStatus;
}
