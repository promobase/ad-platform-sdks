// Auto-generated client for conversion_eqs — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { ConversionEqsListResponse } from "../types.ts";
import type { ListConversionEqsParams } from "../params.ts";

/** conversion_eqs — 1 endpoints */
export function createConversionEqsClient(api: PinterestApiClient) {
  return {
    /** Get event quality score (EQS)
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listConversionEqs(params: ListConversionEqsParams): Promise<ConversionEqsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<ConversionEqsListResponse>(`/ad_accounts/${adAccountId}/conversion_eqs`, query);
      return envelope;
    },
  };
}
