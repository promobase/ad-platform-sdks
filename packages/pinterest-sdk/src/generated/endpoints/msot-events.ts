// @generated
// fingerprint: sha256:e61214d91b29ca3b4c966dbff5c29a59929fd804b243bd65574d686522e174b4
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for msot_events — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { MsotEventsCreateResponse } from "../types.ts";
import type { CreateMsotEventParams } from "../params.ts";

/** msot_events — 1 endpoints */
export function createMsotEventsClient(api: PinterestApiClient) {
  return {
    /** Send Measurement Source Of Truth (MSOT) attributed conversion events
   * Requires pinterest_oauth2: msot:write. */
    async createMsotEvent(params: CreateMsotEventParams): Promise<MsotEventsCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<MsotEventsCreateResponse>(`/ad_accounts/${adAccountId}/msot/events`, rest);
      return envelope;
    },
  };
}
