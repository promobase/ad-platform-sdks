import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { GroupFields } from "./group.ts";

export interface UnifiedThreadFields {
  can_reply: boolean;
  folder: string;
  former_participants: Record<string, unknown>;
  id: string;
  is_owner: boolean;
  is_subscribed: boolean;
  link: string;
  linked_group: GroupFields;
  message_count: number;
  name: string;
  participants: Record<string, unknown>;
  scoped_thread_key: string;
  senders: Record<string, unknown>;
  snippet: string;
  unread_count: number;
  updated_time: string;
  wallpaper: string;
}

export interface UnifiedThreadListMessagesParams {
  source?: string;
  [key: string]: unknown;
}

export function unifiedThreadNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof UnifiedThreadFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<UnifiedThreadFields, F[number]>>(`${id}`, opts),
    messages: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: UnifiedThreadListMessagesParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/messages`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

