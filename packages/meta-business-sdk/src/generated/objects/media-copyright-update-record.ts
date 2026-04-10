import type { ApiClient } from "@promobase/sdk-runtime";
import type { UserFields } from "./user.ts";

export interface MediaCopyrightUpdateRecordFields {
  action_types: string[];
  actor: UserFields;
  actor_type: string;
  creation_time: string;
  id: string;
  ownership_countries: Record<string, unknown>[];
  whitelisted_accounts: Record<string, unknown>[];
}

export function mediaCopyrightUpdateRecordNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as MediaCopyrightUpdateRecordFields,
    get: <F extends (keyof MediaCopyrightUpdateRecordFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MediaCopyrightUpdateRecordFields, F[number]>>(`${id}`, opts),
  };
}

