// @generated
// fingerprint: sha256:d3c289edc0e6ab805bc17f590393b218809332857b3d6ee474e76329a9deed7e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccountLinkStatus, LinkedAccountType, ThirdPartyAppAnalyticsLinkIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AccountLink. Do not edit by hand.
export interface AccountLink {
  resourceName?: string;
  accountLinkId?: string;
  status?: AccountLinkStatus;
  type?: LinkedAccountType;
  thirdPartyAppAnalytics?: ThirdPartyAppAnalyticsLinkIdentifier;
}
