// @generated
// fingerprint: sha256:3e3a495bf621fa454bddef17fa90f410fa6dcd6c7e2d398f452285028edd524d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccessRole } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CustomerUserAccess. Do not edit by hand.
export interface CustomerUserAccess {
  resourceName?: string;
  userId?: string;
  emailAddress?: string;
  accessRole?: AccessRole;
  accessCreationDateTime?: string;
  inviterUserEmailAddress?: string;
  passkeyEnabled?: boolean;
  pendingMultiPartyAuthReview?: string;
}
