// @generated
// fingerprint: sha256:a97f2886517401d8686ddf6048c4b6c1bca8416781f57494ec5d3a3c1b0be240
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OfflineConversionAlert, OfflineConversionDiagnosticStatus, OfflineConversionSummary, OfflineEventUploadClient } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.OfflineConversionUploadConversionActionSummary. Do not edit by hand.
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
