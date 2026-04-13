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
