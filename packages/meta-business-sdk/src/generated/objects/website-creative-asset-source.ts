import type { ApiClient } from "@promobase/sdk-runtime";

export interface WebsiteCreativeAssetSourceFields {
  id: string;
  source_url: string;
}

export function websiteCreativeAssetSourceNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WebsiteCreativeAssetSourceFields,
    get: <F extends (keyof WebsiteCreativeAssetSourceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WebsiteCreativeAssetSourceFields, F[number]>>(`${id}`, opts),
  };
}

