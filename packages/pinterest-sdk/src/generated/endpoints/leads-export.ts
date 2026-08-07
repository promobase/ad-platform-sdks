// Auto-generated client for leads_export — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { LeadsExportCreateResponse, LeadsExportGetResponse } from "../types.ts";
import type { CreateLeadsExportParams, GetLeadsExportParams } from "../params.ts";

/** leads_export — 2 endpoints */
export function createLeadsExportClient(api: PinterestApiClient) {
  return {
    /** Create a request to export leads collected from a lead ad
   * Requires pinterest_oauth2: ads:write. */
    async createLeadsExport(params: CreateLeadsExportParams): Promise<LeadsExportCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<LeadsExportCreateResponse>(`/ad_accounts/${adAccountId}/leads_export`, rest);
      return envelope;
    },

    /** Get the lead export from the lead export create call
   * Requires pinterest_oauth2: ads:read. */
    async getLeadsExport(params: GetLeadsExportParams): Promise<LeadsExportGetResponse> {
      const { adAccountId, leadsExportId, ...query } = params;
      const envelope = await api.get<LeadsExportGetResponse>(`/ad_accounts/${adAccountId}/leads_export/${leadsExportId}`, query);
      return envelope;
    },
  };
}
