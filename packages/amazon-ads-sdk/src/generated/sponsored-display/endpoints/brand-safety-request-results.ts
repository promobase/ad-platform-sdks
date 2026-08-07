// Auto-generated client for Brand Safety Request Results — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetRequestResultsResponse } from "../types.ts";
import type { GetRequestResultsParams } from "../params.ts";

/** Brand Safety Request Results — 1 endpoints */
export function createBrandSafetyRequestResultsClient(api: AmazonAdsApiClient) {
  return {
    /** Gets the results for the given request */
    async getRequestResults(params: GetRequestResultsParams): Promise<GetRequestResultsResponse> {
      const { requestId, ...query } = params;
      const envelope = await api.get<GetRequestResultsResponse>(`/sd/brandSafety/${requestId}/results`, query);
      return envelope;
    },
  };
}
