import type { ApiClient } from "../../runtime/client.ts";
import type { ProfileFields } from "./profile.ts";
import type { VideoCopyrightGeoGateFields } from "./video-copyright-geo-gate.ts";

export interface FBImageCopyrightMatchFields {
  added_to_dashboard_time: string;
  applied_actions: Record<string, Record<string, unknown>>[];
  audit_log: Record<string, unknown>[];
  available_ui_actions: string[];
  expiration_days: number;
  generic_match_data: Record<string, unknown>[];
  id: string;
  is_business_page_match: boolean;
  last_modified_time: string;
  match_data: Record<string, unknown>[];
  match_status: string;
  ownership_countries: VideoCopyrightGeoGateFields;
  reference_owner: ProfileFields;
  time_to_appeal: number;
}

export function fBImageCopyrightMatchNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof FBImageCopyrightMatchFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FBImageCopyrightMatchFields, F[number]>>(`${id}`, opts),
  };
}

