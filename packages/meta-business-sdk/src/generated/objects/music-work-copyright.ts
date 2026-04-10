import type { ApiClient } from "@promobase/sdk-runtime";
import type { VideoCopyrightRuleFields } from "./video-copyright-rule.ts";

export interface MusicWorkCopyrightFields {
  available_ui_actions: string[];
  claim_status: string;
  creation_time: string;
  displayed_fb_matches_count: number;
  displayed_ig_matches_count: number;
  displayed_matches_count: number;
  has_rev_share_eligible_isrcs: boolean;
  id: string;
  is_linking_required_to_monetize_for_manual_claim: boolean;
  match_rule: VideoCopyrightRuleFields;
  status: string;
  tags: string[];
  update_time: string;
}

export function musicWorkCopyrightNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as MusicWorkCopyrightFields,
    get: <F extends (keyof MusicWorkCopyrightFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MusicWorkCopyrightFields, F[number]>>(`${id}`, opts),
  };
}

