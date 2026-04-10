import type { AdsPixelFields } from "./ads-pixel.ts";

export interface AdsSignalDiagnosticIssueFields {
  data_source_id: AdsPixelFields;
  data_source_type: string;
  diagnostic_type: string;
  event_name: string;
  traffic_anomaly_drop_percentage: number;
  traffic_anomaly_drop_timestamp: string;
}

