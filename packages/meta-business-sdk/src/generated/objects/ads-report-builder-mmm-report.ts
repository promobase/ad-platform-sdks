// @generated
// fingerprint: sha256:f646f7a565262c878a3236ef827cf2e3056a23a709588ad7c727cb38a9ab745f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as AdsReportBuilderMMMReportFields,
    get: <F extends (keyof AdsReportBuilderMMMReportFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsReportBuilderMMMReportFields, F[number]>>(`${id}`, opts),
  };
}

