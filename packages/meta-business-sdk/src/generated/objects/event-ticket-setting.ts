import type { ApiClient } from "@promobase/sdk-runtime";

export interface EventTicketSettingFields {
  id: string;
  ticket_delivery_type: string;
}

export function eventTicketSettingNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as EventTicketSettingFields,
    get: <F extends (keyof EventTicketSettingFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<EventTicketSettingFields, F[number]>>(`${id}`, opts),
  };
}

