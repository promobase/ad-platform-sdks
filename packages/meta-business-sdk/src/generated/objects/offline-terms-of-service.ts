import type { ApiClient } from "@promobase/sdk-runtime";
import type { UserFields } from "./user.ts";

export interface OfflineTermsOfServiceFields {
  accept_time: number;
  id: string;
  signed_by_user: UserFields;
}

export function offlineTermsOfServiceNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OfflineTermsOfServiceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OfflineTermsOfServiceFields, F[number]>>(`${id}`, opts),
  };
}

