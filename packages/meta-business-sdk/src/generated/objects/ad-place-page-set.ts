import type { ApiClient } from "@promobase/sdk-runtime";
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

