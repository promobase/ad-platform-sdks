// @generated
// fingerprint: sha256:77d6d44cbcaf3f4c05592216ad292d54931411f0248e475c7dd29b990eae896c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for catalog_reports — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { ReportsGetResponse, ReportsCreateResponse, ReportsStatsResponse } from "../types.ts";
import type { GetReportsParams, CreateReportParams, ListReportsStatsParams } from "../params.ts";

/** catalog_reports — 3 endpoints */
export function createCatalogReportsClient(api: PinterestApiClient) {
  return {
    /** Get catalogs report
   * Requires pinterest_oauth2: catalogs:read. */
    async getReports(params: GetReportsParams): Promise<ReportsGetResponse> {
      const query = params;
      const envelope = await api.get<ReportsGetResponse>(`/catalogs/reports`, query);
      return envelope;
    },

    /** Build catalogs report
   * Requires pinterest_oauth2: catalogs:read. */
    async createReport(params: CreateReportParams): Promise<ReportsCreateResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<ReportsCreateResponse>(`/catalogs/reports`, body);
      return envelope;
    },

    /** List report stats
   * Requires pinterest_oauth2: catalogs:read. */
    async listReportsStats(params: ListReportsStatsParams): Promise<ReportsStatsResponse> {
      const query = params;
      const envelope = await api.get<ReportsStatsResponse>(`/catalogs/reports/stats`, query);
      return envelope;
    },
  };
}
