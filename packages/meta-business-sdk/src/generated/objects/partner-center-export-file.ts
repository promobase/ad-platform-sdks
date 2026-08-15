// @generated
// fingerprint: sha256:82e7dd5ec5391380cff8a8670fb108cf9869418524a45b3b91449a18b1467d7d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

