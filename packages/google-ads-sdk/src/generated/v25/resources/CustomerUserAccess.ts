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
