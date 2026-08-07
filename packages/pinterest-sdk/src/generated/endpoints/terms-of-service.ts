// Auto-generated client for terms_of_service — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { TermsOfServiceGetResponse } from "../types.ts";
import type { GetTermsOfServiceParams } from "../params.ts";

/** terms_of_service — 1 endpoints */
export function createTermsOfServiceClient(api: PinterestApiClient) {
  return {
    /** Get terms of service
   * Requires pinterest_oauth2: ads:read. */
    async getTermsOfService(params: GetTermsOfServiceParams): Promise<TermsOfServiceGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<TermsOfServiceGetResponse>(`/ad_accounts/${adAccountId}/terms_of_service`, query);
      return envelope;
    },
  };
}
