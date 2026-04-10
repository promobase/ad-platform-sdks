import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { CopyrightReferenceContainerFields } from "./copyright-reference-container.ts";
import type { MediaCopyrightUpdateRecordFields } from "./media-copyright-update-record.ts";
import type { UserFields } from "./user.ts";
import type { VideoCopyrightGeoGateFields } from "./video-copyright-geo-gate.ts";
import type { VideoCopyrightRuleFields } from "./video-copyright-rule.ts";
import type { VideoCopyrightSegmentFields } from "./video-copyright-segment.ts";

export interface VideoCopyrightFields {
  content_category: string;
  content_protect_protection_disabled_reason: string;
  copyright_content_id: string;
  creator: UserFields;
  disable_protection_by_content_protect_status: boolean;
  excluded_ownership_segments: VideoCopyrightSegmentFields[];
  id: string;
  in_conflict: boolean;
  monitoring_status: string;
  monitoring_type: string;
  ownership_countries: VideoCopyrightGeoGateFields;
  reference_file: CopyrightReferenceContainerFields;
  reference_file_disabled: boolean;
  reference_file_disabled_by_ops: boolean;
  reference_owner_id: string;
  rule_ids: VideoCopyrightRuleFields[];
  tags: string[];
  whitelisted_ids: string[];
}

export interface VideoCopyrightUpdateParams {
  append_excluded_ownership_segments?: boolean;
  attribution_id?: string;
  content_category?: string;
  excluded_ownership_countries?: string[];
  excluded_ownership_segments?: Record<string, unknown>[];
  is_reference_disabled?: boolean;
  monitoring_type?: string;
  ownership_countries?: string[];
  rule_id?: string;
  whitelisted_ids?: string[];
  whitelisted_ig_user_ids?: string[];
  [key: string]: unknown;
}

export function videoCopyrightNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof VideoCopyrightFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoCopyrightFields, F[number]>>(`${id}`, opts),
    update: (params: VideoCopyrightUpdateParams) =>
      client.post<VideoCopyrightFields>(`${id}`, params as Record<string, unknown>),
    updateRecords: <F extends (keyof MediaCopyrightUpdateRecordFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<MediaCopyrightUpdateRecordFields, F[number]>>(client, `${id}/update_records`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

