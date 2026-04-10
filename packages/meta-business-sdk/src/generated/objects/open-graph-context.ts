import type { ApiClient } from "@promobase/sdk-runtime";

export interface OpenGraphContextFields {
  id: string;
}

export function openGraphContextNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as OpenGraphContextFields,
    get: <F extends (keyof OpenGraphContextFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OpenGraphContextFields, F[number]>>(`${id}`, opts),
  };
}

