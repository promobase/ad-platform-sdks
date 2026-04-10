import type { ApiClient } from "@promobase/sdk-runtime";

export interface UserContextFields {
  id: string;
}

export function userContextNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof UserContextFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<UserContextFields, F[number]>>(`${id}`, opts),
  };
}

