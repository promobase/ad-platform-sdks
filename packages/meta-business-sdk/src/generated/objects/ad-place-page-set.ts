// @generated
// fingerprint: sha256:064652fd6639656fd22e69d45ea8041f1576c767a60988cd1d6d4d3f46441a47
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { PageFields } from "./page.ts";

export interface AdPlacePageSetFields {
  account_id: string;
  id: string;
  location_types: string[];
  name: string;
  pages_count: number;
  parent_page: PageFields;
}

export function adPlacePageSetNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdPlacePageSetFields,
    get: <F extends (keyof AdPlacePageSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdPlacePageSetFields, F[number]>>(`${id}`, opts),
  };
}

