// @generated
// fingerprint: sha256:cdbf8af3956f3d513fbacf356b1bb65377687cbc19c3eb3e3c3c5ff69797cd44
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for conversions — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AdvertiserDefinedEventsGetResponse, AdvertiserDefinedEventsCreateResponse, AdvertiserDefinedEventsUpdateResponse, AdvertiserDefinedEventsDeleteResponse } from "../types.ts";
import type { ListAdvertiserDefinedEventsParams, CreateAdvertiserDefinedEventParams, UpdateAdvertiserDefinedEventParams, DeleteAdvertiserDefinedEventParams } from "../params.ts";

/** conversions — 4 endpoints */
export function createConversionsClient(api: PinterestApiClient) {
  return {
    /** Get advertiser defined events
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdvertiserDefinedEvents(params: ListAdvertiserDefinedEventsParams): Promise<AdvertiserDefinedEventsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdvertiserDefinedEventsGetResponse>(`/ad_accounts/${adAccountId}/advertiser_defined_events`, query);
      return envelope;
    },

    /** Create advertiser defined events
   * Requires pinterest_oauth2: ads:write; client_credentials: ads:write. */
    async createAdvertiserDefinedEvent(params: CreateAdvertiserDefinedEventParams): Promise<AdvertiserDefinedEventsCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AdvertiserDefinedEventsCreateResponse>(`/ad_accounts/${adAccountId}/advertiser_defined_events`, rest);
      return envelope;
    },

    /** Update advertiser defined events
   * Requires pinterest_oauth2: ads:write; client_credentials: ads:write. */
    async updateAdvertiserDefinedEvent(params: UpdateAdvertiserDefinedEventParams): Promise<AdvertiserDefinedEventsUpdateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<AdvertiserDefinedEventsUpdateResponse>(`/ad_accounts/${adAccountId}/advertiser_defined_events`, rest);
      return envelope;
    },

    /** Delete advertiser defined events
   * Requires pinterest_oauth2: ads:write; client_credentials: ads:write. */
    async deleteAdvertiserDefinedEvent(params: DeleteAdvertiserDefinedEventParams): Promise<AdvertiserDefinedEventsDeleteResponse> {
      const { adAccountId } = params;
      const envelope = await api.delete<AdvertiserDefinedEventsDeleteResponse>(`/ad_accounts/${adAccountId}/advertiser_defined_events`);
      return envelope;
    },
  };
}
