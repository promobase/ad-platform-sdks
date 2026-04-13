import type { Consent, TransactionAttribute, UserAttribute, UserIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v23.common.UserData. Do not edit by hand.
export interface UserData {
  userIdentifiers?: UserIdentifier[];
  transactionAttribute?: TransactionAttribute;
  userAttribute?: UserAttribute;
  consent?: Consent;
}
