import type { ApiClient } from "@promobase/sdk-runtime";

export interface BusinessTagFields {
  id: string;
  name: string;
}

export function businessTagNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessTagFields,
    get: <F extends (keyof BusinessTagFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessTagFields, F[number]>>(`${id}`, opts),
  };
}

