import type { ApiClient } from "../../runtime/client.ts";

export interface AnalyticsSegmentFields {
  custom_audience_ineligiblity_reasons: string[];
  description: string;
  estimated_custom_audience_size: number;
  event_info_rules: Record<string, unknown>[];
  event_rules: Record<string, unknown>[];
  filter_set: string;
  has_demographic_rules: boolean;
  id: string;
  is_all_user: boolean;
  is_eligible_for_push_campaign: boolean;
  is_internal: boolean;
  name: string;
  percentile_rules: Record<string, unknown>[];
  time_last_seen: number;
  time_last_updated: number;
  user_property_rules: Record<string, unknown>[];
  web_param_rules: Record<string, unknown>[];
}

export function analyticsSegmentNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AnalyticsSegmentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AnalyticsSegmentFields, F[number]>>(`${id}`, opts),
  };
}

