// @generated
// fingerprint: sha256:862883afbe0d101a81f0abae034a11ca87bdb8d0aeacdeee5a9e8651c0fc20e3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface WebsiteCreativeInfoFields {
  id: string;
  image_urls: string[];
  link_url: string;
}

export function websiteCreativeInfoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WebsiteCreativeInfoFields,
    get: <F extends (keyof WebsiteCreativeInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WebsiteCreativeInfoFields, F[number]>>(`${id}`, opts),
  };
}

