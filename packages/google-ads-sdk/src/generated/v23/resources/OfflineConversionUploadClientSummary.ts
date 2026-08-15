// @generated
// fingerprint: sha256:b9369624e0d428d5c07d46c48e90fea0c09986f69758b0702a1722475df6b0fc
// DO NOT EDIT: generated file; changes will be overwritten.
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
