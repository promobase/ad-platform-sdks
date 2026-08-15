// @generated
// fingerprint: sha256:7d21ae7c42aded5cc2bdef626903e9f1b85af08624e0c1c2e718af66592721f3
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Reports — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { ReportRow, ReportRequest } from "../types.ts";
import type { CreateReportParams } from "../params.ts";

/** Reports — 1 endpoints */
export function createReportsClient(api: RedditApiClient) {
  return {
    /** Generate performance report */
    async createReport(params: CreateReportParams): Promise<ReportRow[]> {
      const { accountId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/reports`, rest);
      return envelope.data as ReportRow[];
    },
  };
}
