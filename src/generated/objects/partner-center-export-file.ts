import type { ApiClient } from "../../runtime/client.ts";

export interface PartnerCenterExportFileFields {
  id: string;
  report_ds: string;
  url: string;
}

export function partnerCenterExportFileNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PartnerCenterExportFileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PartnerCenterExportFileFields, F[number]>>(`${id}`, opts),
  };
}

