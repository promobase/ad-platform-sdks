import type { ApiClient } from "../../runtime/client.ts";

export interface BlindPigFields {
  id: string;
  name: string;
}

export function blindPigNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof BlindPigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BlindPigFields, F[number]>>(`${id}`, opts),
  };
}

