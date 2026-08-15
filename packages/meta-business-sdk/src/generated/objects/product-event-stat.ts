// @generated
// fingerprint: sha256:9a7e28b7ce8cbbf6554fac0755e1a2d57661d618fec0b897de586cd193574ff2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ExternalEventSourceFields } from "./external-event-source.ts";
import type { ProductEventStatDeviceType, ProductEventStatEvent } from "../enums.ts";

export interface ProductEventStatFields {
  date_start: string;
  date_stop: string;
  device_type: ProductEventStatDeviceType;
  event: ProductEventStatEvent;
  event_source: ExternalEventSourceFields;
  total_content_ids_matched_other_catalogs: number;
  total_matched_content_ids: number;
  total_unmatched_content_ids: number;
  unique_content_ids_matched_other_catalogs: number;
  unique_matched_content_ids: number;
  unique_unmatched_content_ids: number;
}

