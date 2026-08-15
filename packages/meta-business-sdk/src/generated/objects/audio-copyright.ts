// @generated
// fingerprint: sha256:639b3b7ef75f4798883b020e7673c54ea0d2a5e3546dc45b84932b2574d2ebd2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { AudioAssetFields } from "./audio-asset.ts";
import type { MediaCopyrightUpdateRecordFields } from "./media-copyright-update-record.ts";
import type { VideoCopyrightRuleFields } from "./video-copyright-rule.ts";

export interface AudioCopyrightFields {
  audio_asset: AudioAssetFields;
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
      new Cursor<Pick<MediaCopyrightUpdateRecordFields, F[number]>>(client, `${id}/update_records`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

