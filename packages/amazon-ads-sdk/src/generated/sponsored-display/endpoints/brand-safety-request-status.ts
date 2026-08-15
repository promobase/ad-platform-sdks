// @generated
// fingerprint: sha256:cf44ea8a1766cbd64f301816f34e2689549fbad5c9f467b0464071e4ee14b2dc
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Brand Safety Request Status — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { GetRequestStatusResponse, ListRequestStatusResponse } from "../types.ts";
import type { GetRequestStatusParams, ListRequestStatusParams } from "../params.ts";

/** Brand Safety Request Status — 2 endpoints */
export function createBrandSafetyRequestStatusClient(api: AmazonAdsApiClient) {
  return {
    /** Gets the status of the given request */
    async getRequestStatus(params: GetRequestStatusParams): Promise<GetRequestStatusResponse> {
      const { requestId, ...query } = params;
      const envelope = await api.get<GetRequestStatusResponse>(`/sd/brandSafety/${requestId}/status`, query);
      return envelope;
    },

    /** List status of all requests */
    async listRequestStatus(params: ListRequestStatusParams): Promise<ListRequestStatusResponse> {
      const query = params;
      const envelope = await api.get<ListRequestStatusResponse>(`/sd/brandSafety/status`, query);
      return envelope;
    },
  };
}
