import type { ApiClient } from "@promobase/sdk-runtime";

export interface WebsiteCreativeInfoFields {
  id: string;
  image_urls: string[];
  link_url: string;
}

export function websiteCreativeInfoNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WebsiteCreativeInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WebsiteCreativeInfoFields, F[number]>>(`${id}`, opts),
  };
}

