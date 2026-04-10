import type { ApiClient } from "../../runtime/client.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdKeywordsFields } from "./ad-keywords.ts";

export interface AdSavedKeywordsFields {
  account: AdAccountFields;
  id: string;
  keywords: AdKeywordsFields;
  name: string;
  run_status: string;
  time_created: string;
  time_updated: string;
}

export function adSavedKeywordsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdSavedKeywordsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdSavedKeywordsFields, F[number]>>(`${id}`, opts),
  };
}

