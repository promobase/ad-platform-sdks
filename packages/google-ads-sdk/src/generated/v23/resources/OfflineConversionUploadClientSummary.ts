import type { OfflineConversionAlert, OfflineConversionDiagnosticStatus, OfflineConversionSummary, OfflineEventUploadClient } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.OfflineConversionUploadClientSummary. Do not edit by hand.
export interface OfflineConversionUploadClientSummary {
  resourceName?: string;
  client?: OfflineEventUploadClient;
  status?: OfflineConversionDiagnosticStatus;
  totalEventCount?: string;
  successfulEventCount?: string;
  successRate?: number;
  pendingEventCount?: string;
  pendingRate?: number;
  lastUploadDateTime?: string;
  dailySummaries?: OfflineConversionSummary[];
  jobSummaries?: OfflineConversionSummary[];
  alerts?: OfflineConversionAlert[];
}
