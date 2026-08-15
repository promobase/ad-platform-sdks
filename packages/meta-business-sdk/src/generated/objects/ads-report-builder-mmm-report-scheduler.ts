// @generated
// fingerprint: sha256:03688b273825c12815dc04cdc844572bef8a1d30b0539567dbdb00973f2695e9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AdsReportBuilderMMMReportSchedulerFields {
  ad_account_ids: string[];
  filtering: Record<string, unknown>[];
  id: string;
  report_name: string;
  schedule_frequency: string;
}

export function adsReportBuilderMMMReportSchedulerNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsReportBuilderMMMReportSchedulerFields,
    get: <F extends (keyof AdsReportBuilderMMMReportSchedulerFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsReportBuilderMMMReportSchedulerFields, F[number]>>(`${id}`, opts),
  };
}

