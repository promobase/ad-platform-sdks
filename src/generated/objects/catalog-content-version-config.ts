import type { ApiClient } from "../../runtime/client.ts";

export interface CatalogContentVersionConfigFields {
  id: string;
  name: string;
  version: string;
}

export function catalogContentVersionConfigNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CatalogContentVersionConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CatalogContentVersionConfigFields, F[number]>>(`${id}`, opts),
  };
}

