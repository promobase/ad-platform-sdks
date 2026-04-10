import type { ApiClient } from "@promobase/sdk-runtime";

export interface WebsiteCreativeAssetSuggestionsFields {
  ad_account_id: string;
  extraction_status: string;
  id: string;
  link_url: string;
}

export function websiteCreativeAssetSuggestionsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WebsiteCreativeAssetSuggestionsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WebsiteCreativeAssetSuggestionsFields, F[number]>>(`${id}`, opts),
  };
}

