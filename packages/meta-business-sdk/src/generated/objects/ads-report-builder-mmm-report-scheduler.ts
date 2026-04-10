import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdsReportBuilderMMMReportSchedulerFields {
  ad_account_ids: string[];
  filtering: Record<string, unknown>[];
  id: string;
  report_name: string;
  schedule_frequency: string;
}

export function adsReportBuilderMMMReportSchedulerNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsReportBuilderMMMReportSchedulerFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsReportBuilderMMMReportSchedulerFields, F[number]>>(`${id}`, opts),
  };
}

