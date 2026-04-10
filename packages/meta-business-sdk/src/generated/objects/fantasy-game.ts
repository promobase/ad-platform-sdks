import type { ApiClient } from "@promobase/sdk-runtime";

export interface FantasyGameFields {
  id: string;
  name: string;
}

export function fantasyGameNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof FantasyGameFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FantasyGameFields, F[number]>>(`${id}`, opts),
  };
}

