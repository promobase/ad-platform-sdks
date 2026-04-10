import type { ApiClient } from "@promobase/sdk-runtime";

export interface AREffectFields {
  creation_time: string;
  id: string;
  last_modified_time: string;
  name: string;
  status: string;
  surfaces: string[];
}

export function aREffectNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AREffectFields,
    get: <F extends (keyof AREffectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AREffectFields, F[number]>>(`${id}`, opts),
  };
}

