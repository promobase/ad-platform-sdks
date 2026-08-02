import type { AccountLinkStatus, LinkedAccountType, ThirdPartyAppAnalyticsLinkIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AccountLink. Do not edit by hand.
export interface AccountLink {
  resourceName?: string;
  accountLinkId?: string;
  status?: AccountLinkStatus;
  type?: LinkedAccountType;
  thirdPartyAppAnalytics?: ThirdPartyAppAnalyticsLinkIdentifier;
}
