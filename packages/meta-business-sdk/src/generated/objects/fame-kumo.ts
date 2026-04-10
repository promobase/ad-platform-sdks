import type { ApiClient } from "@promobase/sdk-runtime";

export interface FAMEKumoFields {
  id: string;
}

export function fAMEKumoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as FAMEKumoFields,
    get: <F extends (keyof FAMEKumoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FAMEKumoFields, F[number]>>(`${id}`, opts),
  };
}

