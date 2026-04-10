import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdsReportBuilderMMMReportFields {
  async_status: string;
  export_format: string;
  export_name: string;
  export_type: string;
  has_seen: boolean;
  id: string;
  mmm_status: string;
  time_start: string;
}

export function adsReportBuilderMMMReportNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsReportBuilderMMMReportFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsReportBuilderMMMReportFields, F[number]>>(`${id}`, opts),
  };
}

