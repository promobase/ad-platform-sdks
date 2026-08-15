// @generated
// fingerprint: sha256:de23f43a1b940667f969555d00cd897a2a4361f486c33b51d6e39744d4407a17
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OfflineConversionAlert, OfflineConversionDiagnosticStatus, OfflineConversionSummary, OfflineEventUploadClient } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.OfflineConversionUploadConversionActionSummary. Do not edit by hand.
export interface OfflineConversionUploadConversionActionSummary {
  resourceName?: string;
  client?: OfflineEventUploadClient;
  conversionActionId?: string;
  conversionActionName?: string;
  status?: OfflineConversionDiagnosticStatus;
  totalEventCount?: string;
  successfulEventCount?: string;
  pendingEventCount?: string;
  lastUploadDateTime?: string;
  dailySummaries?: OfflineConversionSummary[];
  jobSummaries?: OfflineConversionSummary[];
  alerts?: OfflineConversionAlert[];
}
