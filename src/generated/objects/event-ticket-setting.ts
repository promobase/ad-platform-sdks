import type { ApiClient } from "../../runtime/client.ts";

export interface EventTicketSettingFields {
  id: string;
  ticket_delivery_type: string;
}

export function eventTicketSettingNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof EventTicketSettingFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<EventTicketSettingFields, F[number]>>(`${id}`, opts),
  };
}

