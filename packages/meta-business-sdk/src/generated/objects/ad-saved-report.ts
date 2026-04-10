import type { ApiClient } from "@promobase/sdk-runtime";
import type { ApplicationFields } from "./application.ts";
import type { UserFields } from "./user.ts";

export interface AdSavedReportFields {
  app_owner: ApplicationFields;
  breakdowns: string[];
  builtin_column_set: string;
  creation_source: string;
  date_interval: Record<string, unknown>;
  date_preset: string;
  format_version: number;
  id: string;
  insights_section: Record<string, unknown>;
  is_shared_unread: boolean;
  level: string;
  name: string;
  normalized_filter: unknown[];
  sort: Record<string, unknown>[];
  user_attribution_windows: string[];
  user_columns: string[];
  user_filter: unknown[];
  user_owner: UserFields;
}

export function adSavedReportNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdSavedReportFields,
    get: <F extends (keyof AdSavedReportFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdSavedReportFields, F[number]>>(`${id}`, opts),
  };
}

