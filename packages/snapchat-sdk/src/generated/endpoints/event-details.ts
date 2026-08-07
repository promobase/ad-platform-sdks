// Auto-generated client for event-details — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { EventDetail, CreateEventDetailParams, GetEventDetailParams, ListEventDetailsParams, DeleteEventDetailParams } from "../types/event-details.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — event-details */
export function createEventDetailsClient(api: SnapchatApiClient) {
  return {
    /** event-details */
    async createEventDetail(params: CreateEventDetailParams): Promise<EventDetail> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/event_details`, rest);
      return ensureOne<EventDetail>(unpack<EventDetail>(envelope, "event_details", "event_detail"), "EventDetail");
    },

    /** event-details */
    async getEventDetail(params: GetEventDetailParams): Promise<EventDetail> {
      const { eventDetailsId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/event_details/${eventDetailsId}`, query);
      return ensureOne<EventDetail>(unpack<EventDetail>(envelope, "event_details", "event_detail"), "EventDetail");
    },

    /** event-details */
    listEventDetails(params: ListEventDetailsParams): SnapchatCursor<EventDetail> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/event_details`, link ? undefined : query).then((envelope) => ({
          items: unpack<EventDetail>(envelope, "event_details", "event_detail"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** event-details */
    async deleteEventDetail(params: DeleteEventDetailParams): Promise<void> {
      const { eventDetailsId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/event_details/${eventDetailsId}`);
    },
  };
}
