import type { ApiClient } from "@promobase/sdk-runtime";

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

