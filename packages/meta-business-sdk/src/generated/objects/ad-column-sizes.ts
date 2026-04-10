import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";
import type { UserFields } from "./user.ts";

export interface AdColumnSizesFields {
  admarket_account: AdAccountFields;
  app_id: string;
  columns: Record<string, string>[];
  id: string;
  owner: UserFields;
  page: string;
  report: string;
  tab: string;
  view: string;
}

export function adColumnSizesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdColumnSizesFields,
    get: <F extends (keyof AdColumnSizesFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdColumnSizesFields, F[number]>>(`${id}`, opts),
  };
}

