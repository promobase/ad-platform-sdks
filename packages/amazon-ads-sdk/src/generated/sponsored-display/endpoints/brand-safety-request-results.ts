// @generated
// fingerprint: sha256:6aae1f66e4a0244de8a7291e6cc8f75a7426f76e49197df80316ac10bb0efbad
// DO NOT EDIT: generated file; changes will be overwritten.
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
