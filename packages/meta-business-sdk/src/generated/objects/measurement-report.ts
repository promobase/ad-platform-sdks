// @generated
// fingerprint: sha256:ba46a002ecfe5e5960ddaae44225c6543ab52faaeb92948141609692b46809a3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface MeasurementReportFields {
  download_urls: string[];
  id: string;
  metadata: Record<string, unknown>;
  report_type: string;
  status: string;
}

export function measurementReportNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as MeasurementReportFields,
    get: <F extends (keyof MeasurementReportFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MeasurementReportFields, F[number]>>(`${id}`, opts),
  };
}

