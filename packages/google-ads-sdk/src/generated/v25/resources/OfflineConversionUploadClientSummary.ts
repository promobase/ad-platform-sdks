// @generated
// fingerprint: sha256:f282f23aad4f4783fff6fe9e1dcee01a57abea22daf563e09e48a6be3e6311ac
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OfflineConversionAlert, OfflineConversionDiagnosticStatus, OfflineConversionSummary, OfflineEventUploadClient } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.OfflineConversionUploadClientSummary. Do not edit by hand.
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
