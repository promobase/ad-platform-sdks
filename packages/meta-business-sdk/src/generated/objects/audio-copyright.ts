import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { MediaCopyrightUpdateRecordFields } from "./media-copyright-update-record.ts";
import type { VideoCopyrightRuleFields } from "./video-copyright-rule.ts";

export interface AudioCopyrightFields {
  creation_time: string;
  displayed_matches_count: number;
  id: string;
  in_conflict: boolean;
  isrc: string;
  match_rule: VideoCopyrightRuleFields;
  ownership_countries: string[];
  ownership_details: Record<string, Record<string, unknown>>[];
  reference_file_status: string;
  ridge_monitoring_status: string;
  tags: string[];
  update_time: string;
  whitelisted_fb_users: Record<string, unknown>[];
  whitelisted_ig_users: string[];
}

export function audioCopyrightNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AudioCopyrightFields,
    get: <F extends (keyof AudioCopyrightFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AudioCopyrightFields, F[number]>>(`${id}`, opts),
    updateRecords: <F extends (keyof MediaCopyrightUpdateRecordFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<MediaCopyrightUpdateRecordFields, F[number]>>(client, `${id}/update_records`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

