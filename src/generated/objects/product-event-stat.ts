import type { ExternalEventSourceFields } from "./external-event-source.ts";

export interface ProductEventStatFields {
  date_start: string;
  date_stop: string;
  device_type: string;
  event: string;
  event_source: ExternalEventSourceFields;
  total_content_ids_matched_other_catalogs: number;
  total_matched_content_ids: number;
  total_unmatched_content_ids: number;
  unique_content_ids_matched_other_catalogs: number;
  unique_matched_content_ids: number;
  unique_unmatched_content_ids: number;
}

