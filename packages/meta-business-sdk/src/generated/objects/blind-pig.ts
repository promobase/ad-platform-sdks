import type { ApiClient } from "@promobase/sdk-runtime";

export interface BlindPigFields {
  id: string;
  name: string;
}

export function blindPigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BlindPigFields,
    get: <F extends (keyof BlindPigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BlindPigFields, F[number]>>(`${id}`, opts),
  };
}

