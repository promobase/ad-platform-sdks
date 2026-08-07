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
