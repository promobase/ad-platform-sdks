import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface AdsQuickViewsFields {
  attribution_windows: string[];
  breakdowns: string[];
  column_fields: string[];
  description: string;
  id: string;
  is_attribution_windows_disabled: boolean;
  is_breakdowns_disabled: boolean;
  is_columns_and_sort_disabled: boolean;
  is_filters_disabled: boolean;
  name: string;
  owner: ProfileFields;
  permission: string;
  quick_view_type: string;
  sort: Record<string, unknown>[];
  time_stamp_last_used_by_owner: string;
}

export function adsQuickViewsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsQuickViewsFields,
    get: <F extends (keyof AdsQuickViewsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsQuickViewsFields, F[number]>>(`${id}`, opts),
  };
}

