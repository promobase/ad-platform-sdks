// @generated
// fingerprint: sha256:dc193fa51e343d690f0b9cd5e2757cf25309bc79afddf78ab12f1d3087732257
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

