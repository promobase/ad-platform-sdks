// @generated
// fingerprint: sha256:d06d0a5036ff8087d1276676fd313305368a15b06aa5dc7d04e49d0e8613c1ee
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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

