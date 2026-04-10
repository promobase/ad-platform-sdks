import type { ApiClient } from "@promobase/sdk-runtime";

export interface FAMEKumoFields {
  id: string;
}

export function fAMEKumoNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof FAMEKumoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FAMEKumoFields, F[number]>>(`${id}`, opts),
  };
}

