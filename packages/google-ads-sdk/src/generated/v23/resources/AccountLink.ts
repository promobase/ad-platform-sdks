import type { AccountLinkStatus, LinkedAccountType, ThirdPartyAppAnalyticsLinkIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AccountLink. Do not edit by hand.
export interface AccountLink {
  resourceName?: string;
  accountLinkId?: string;
  status?: AccountLinkStatus;
  type?: LinkedAccountType;
  thirdPartyAppAnalytics?: ThirdPartyAppAnalyticsLinkIdentifier;
}
