// Auto-generated client for pins — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { PinsCreateResponse, PinsListResponse, PinsGetResponse, PinsUpdateResponse, PinsDeleteResponse, PinsAnalyticsResponse, PinsSaveResponse, MultiPinsAnalyticsResponse } from "../types.ts";
import type { CreatePinParams, ListPinsParams, GetPinsParams, UpdatePinParams, DeletePinParams, GetPinsAnalyticsParams, PostPinsSaveParams, GetMultiPinsAnalyticsParams } from "../params.ts";

/** pins — 8 endpoints */
export function createPinsClient(api: PinterestApiClient) {
  return {
    /** Create Pin
   * Requires pinterest_oauth2: boards:read, boards:write, pins:read, pins:write; client_credentials: boards:read, boards:write, pins:read, pins:write. */
    async createPin(params: CreatePinParams): Promise<PinsCreateResponse> {
      const rest = params;
      const envelope = await api.post<PinsCreateResponse>(`/pins`, rest);
      return envelope;
    },

    /** List Pins
   * Requires pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read. */
    async listPins(params: ListPinsParams): Promise<PinsListResponse> {
      const query = params;
      const envelope = await api.get<PinsListResponse>(`/pins`, query);
      return envelope;
    },

    /** Get Pin
   * Requires pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read. */
    async getPins(params: GetPinsParams): Promise<PinsGetResponse> {
      const { pinId, ...query } = params;
      const envelope = await api.get<PinsGetResponse>(`/pins/${pinId}`, query);
      return envelope;
    },

    /** Update Pin
   * Requires pinterest_oauth2: boards:read, boards:write, pins:read, pins:write; client_credentials: boards:read, boards:write, pins:read, pins:write. */
    async updatePin(params: UpdatePinParams): Promise<PinsUpdateResponse> {
      const { pinId, ...rest } = params;
      const envelope = await api.patch<PinsUpdateResponse>(`/pins/${pinId}`, rest);
      return envelope;
    },

    /** Delete Pin
   * Requires pinterest_oauth2: boards:read, boards:write, pins:read, pins:write; client_credentials: boards:read, boards:write, pins:read, pins:write. */
    async deletePin(params: DeletePinParams): Promise<PinsDeleteResponse> {
      const { pinId } = params;
      const envelope = await api.delete<PinsDeleteResponse>(`/pins/${pinId}`);
      return envelope;
    },

    /** Get Pin analytics
   * Requires pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read. */
    async getPinsAnalytics(params: GetPinsAnalyticsParams): Promise<PinsAnalyticsResponse> {
      const { pinId, ...query } = params;
      const envelope = await api.get<PinsAnalyticsResponse>(`/pins/${pinId}/analytics`, query);
      return envelope;
    },

    /** Save Pin
   * Requires pinterest_oauth2: boards:read, boards:write, pins:read, pins:write. */
    async postPinsSave(params: PostPinsSaveParams): Promise<PinsSaveResponse> {
      const { pinId, ...rest } = params;
      const envelope = await api.post<PinsSaveResponse>(`/pins/${pinId}/save`, rest);
      return envelope;
    },

    /** Get multiple Pin analytics
   * Requires pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read. */
    async getMultiPinsAnalytics(params: GetMultiPinsAnalyticsParams): Promise<MultiPinsAnalyticsResponse> {
      const query = params;
      const envelope = await api.get<MultiPinsAnalyticsResponse>(`/pins/analytics`, query);
      return envelope;
    },
  };
}
