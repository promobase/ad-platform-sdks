import type { ApiClient } from "@promobase/sdk-runtime";

export interface CatalogContentVersionConfigFields {
  id: string;
  name: string;
  version: string;
}

export function catalogContentVersionConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CatalogContentVersionConfigFields,
    get: <F extends (keyof CatalogContentVersionConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogContentVersionConfigFields, F[number]>>(`${id}`, opts),
  };
}

