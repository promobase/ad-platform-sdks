// @generated
// fingerprint: sha256:d1515b4d81ad894361b74cc5607fa6b5c65fff253e694d5df0b015d1ea5df2a1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface PageInsightsAsyncExportRunFields {
  data_level: string;
  filters: Record<string, unknown>[];
  format: string;
  gen_report_date: number;
  id: string;
  report_end_date: number;
  report_start_date: number;
  sorters: Record<string, unknown>[];
  status: string;
}

export function pageInsightsAsyncExportRunNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PageInsightsAsyncExportRunFields,
    get: <F extends (keyof PageInsightsAsyncExportRunFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PageInsightsAsyncExportRunFields, F[number]>>(`${id}`, opts),
  };
}

