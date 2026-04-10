import type { ApiClient } from "@promobase/sdk-runtime";

export interface FantasyGameFields {
  id: string;
  name: string;
}

export function fantasyGameNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as FantasyGameFields,
    get: <F extends (keyof FantasyGameFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FantasyGameFields, F[number]>>(`${id}`, opts),
  };
}

