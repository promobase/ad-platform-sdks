import type { ApiClient } from "../../runtime/client.ts";

export interface MeasurementReportFields {
  download_urls: string[];
  id: string;
  metadata: Record<string, unknown>;
  report_type: string;
  status: string;
}

export function measurementReportNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof MeasurementReportFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MeasurementReportFields, F[number]>>(`${id}`, opts),
  };
}

