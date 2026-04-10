import type { ApiClient } from "@promobase/sdk-runtime";
import type { PageFields } from "./page.ts";

export interface PageLeadsAccessConfigFields {
  id: string;
  page: PageFields;
}

export function pageLeadsAccessConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PageLeadsAccessConfigFields,
    get: <F extends (keyof PageLeadsAccessConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PageLeadsAccessConfigFields, F[number]>>(`${id}`, opts),
  };
}

