import type { AccessRole } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomerUserAccess. Do not edit by hand.
export interface CustomerUserAccess {
  resourceName?: string;
  userId?: string;
  emailAddress?: string;
  accessRole?: AccessRole;
  accessCreationDateTime?: string;
  inviterUserEmailAddress?: string;
}
