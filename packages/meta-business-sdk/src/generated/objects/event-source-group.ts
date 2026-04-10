import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BusinessFields } from "./business.ts";
import type { ExternalEventSourceFields } from "./external-event-source.ts";

export interface EventSourceGroupFields {
  business: BusinessFields;
  event_sources: ExternalEventSourceFields[];
  id: string;
  name: string;
  owner_business: BusinessFields;
}

export interface EventSourceGroupCreateSharedAccountsParams {
  accounts: string[];
  [key: string]: unknown;
}

export interface EventSourceGroupUpdateParams {
  event_sources?: string[];
  name?: string;
  [key: string]: unknown;
}

export function eventSourceGroupNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as EventSourceGroupFields,
    get: <F extends (keyof EventSourceGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<EventSourceGroupFields, F[number]>>(`${id}`, opts),
    update: (params: EventSourceGroupUpdateParams) =>
      client.post<EventSourceGroupFields>(`${id}`, params as Record<string, unknown>),
    sharedAccounts: {
      __path: `${id}/shared_accounts`,
      __brand: undefined as unknown as AdAccountFields,
      list: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/shared_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: EventSourceGroupCreateSharedAccountsParams) =>
        client.post<EventSourceGroupFields>(`${id}/shared_accounts`, params as Record<string, unknown>),
    },
  };
}

