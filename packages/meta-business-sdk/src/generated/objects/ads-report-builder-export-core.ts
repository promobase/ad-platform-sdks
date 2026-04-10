import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdsReportBuilderExportCoreFields {
  async_percent_completion: number;
  async_report_url: string;
  async_status: string;
  client_creation_value: string;
  expiry_time: string;
  export_download_time: string;
  export_format: string;
  export_name: string;
  export_type: string;
  has_seen: boolean;
  id: string;
  is_sharing: boolean;
  link_sharing_expiration_time: string;
  link_sharing_uri: string;
  time_completed: string;
  time_start: string;
}

export function adsReportBuilderExportCoreNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsReportBuilderExportCoreFields,
    get: <F extends (keyof AdsReportBuilderExportCoreFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsReportBuilderExportCoreFields, F[number]>>(`${id}`, opts),
  };
}

