// @generated
// fingerprint: sha256:a235ca55871682f7b515ca5a82af375940edd9c5ac2b1a31a40304a3139f91dd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccountLinkStatus, LinkedAccountType, ThirdPartyAppAnalyticsLinkIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AccountLink. Do not edit by hand.
export interface AccountLink {
  resourceName?: string;
  accountLinkId?: string;
  status?: AccountLinkStatus;
  type?: LinkedAccountType;
  thirdPartyAppAnalytics?: ThirdPartyAppAnalyticsLinkIdentifier;
}
