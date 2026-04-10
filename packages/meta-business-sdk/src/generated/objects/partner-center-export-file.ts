import type { ApiClient } from "@promobase/sdk-runtime";

export interface PartnerCenterExportFileFields {
  id: string;
  report_ds: string;
  url: string;
}

export function partnerCenterExportFileNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PartnerCenterExportFileFields,
    get: <F extends (keyof PartnerCenterExportFileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PartnerCenterExportFileFields, F[number]>>(`${id}`, opts),
  };
}

