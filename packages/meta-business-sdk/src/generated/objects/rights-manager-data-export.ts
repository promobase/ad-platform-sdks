import type { ApiClient } from "@promobase/sdk-runtime";

export interface RightsManagerDataExportFields {
  download_uri: string;
  export_scope: string;
  id: string;
  name: string;
  record_type: string;
  time_range_end: string;
  time_range_start: string;
}

export function rightsManagerDataExportNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof RightsManagerDataExportFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<RightsManagerDataExportFields, F[number]>>(`${id}`, opts),
  };
}

