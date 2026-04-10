import type { ApiClient } from "../../runtime/client.ts";
import type { CopyrightReferenceContainerFields } from "./copyright-reference-container.ts";
import type { VideoCopyrightRuleFields } from "./video-copyright-rule.ts";

export interface MusicVideoCopyrightFields {
  creation_time: string;
  displayed_matches_count: number;
  id: string;
  in_conflict: boolean;
  isrc: string;
  match_rule: VideoCopyrightRuleFields;
  ownership_countries: string[];
  reference_file_status: string;
  ridge_monitoring_status: string;
  tags: string[];
  update_time: string;
  video_asset: CopyrightReferenceContainerFields;
  whitelisted_fb_users: Record<string, unknown>[];
  whitelisted_ig_users: string[];
}

export function musicVideoCopyrightNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof MusicVideoCopyrightFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MusicVideoCopyrightFields, F[number]>>(`${id}`, opts),
  };
}

