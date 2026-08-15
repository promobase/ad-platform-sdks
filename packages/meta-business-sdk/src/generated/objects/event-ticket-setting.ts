// @generated
// fingerprint: sha256:b4230c832da4bb0dba2affeffab7a777e9d866061e3aefc6b7b82bdac2275d19
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

