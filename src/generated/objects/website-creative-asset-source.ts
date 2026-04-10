import type { ApiClient } from "../../runtime/client.ts";

export interface WebsiteCreativeAssetSourceFields {
  id: string;
  source_url: string;
}

export function websiteCreativeAssetSourceNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WebsiteCreativeAssetSourceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WebsiteCreativeAssetSourceFields, F[number]>>(`${id}`, opts),
  };
}

