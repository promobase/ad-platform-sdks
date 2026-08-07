// Auto-generated client for conversion_events — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { EventsCreateResponse } from "../types.ts";
import type { CreateEventParams } from "../params.ts";

/** conversion_events — 1 endpoints */
export function createConversionEventsClient(api: PinterestApiClient) {
  return {
    /** Send conversions
   * Requires pinterest_oauth2: ads:write. */
    async createEvent(params: CreateEventParams): Promise<EventsCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<EventsCreateResponse>(`/ad_accounts/${adAccountId}/events`, rest);
      return envelope;
    },
  };
}
