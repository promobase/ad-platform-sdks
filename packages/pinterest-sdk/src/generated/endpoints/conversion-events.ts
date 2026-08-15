// @generated
// fingerprint: sha256:68e2937077ec5f62d360bf6d91624279c23325d84adc08528ad4ff2c76d49088
// DO NOT EDIT: generated file; changes will be overwritten.
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
