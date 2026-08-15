// @generated
// fingerprint: sha256:b3ac5b8cc05a059d14f827fbab918e5c7d1895a3c36d7f1700de815cec6ef0c7
// DO NOT EDIT: generated file; changes will be overwritten.
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
