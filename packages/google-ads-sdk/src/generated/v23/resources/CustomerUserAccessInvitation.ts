// @generated
// fingerprint: sha256:5a8a2d22244c46806c67996e7572e8366adea44affc231c816a7c0ea4729c5a6
// DO NOT EDIT: generated file; changes will be overwritten.
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
