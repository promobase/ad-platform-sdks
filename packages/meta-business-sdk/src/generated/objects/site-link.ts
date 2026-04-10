import type { ApiClient } from "@promobase/sdk-runtime";

export interface SiteLinkFields {
  id: string;
  link_image_hash: string;
  link_title: string;
  link_type: string;
  link_url: string;
}

export function siteLinkNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as SiteLinkFields,
    get: <F extends (keyof SiteLinkFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SiteLinkFields, F[number]>>(`${id}`, opts),
  };
}

