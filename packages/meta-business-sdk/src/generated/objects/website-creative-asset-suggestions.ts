// @generated
// fingerprint: sha256:dd4e0468eccf18c3867a0f11e719537488906653c6171eab276dfb5333181445
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface WebsiteCreativeAssetSuggestionsFields {
  ad_account_id: string;
  extraction_status: string;
  id: string;
  link_url: string;
}

export function websiteCreativeAssetSuggestionsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WebsiteCreativeAssetSuggestionsFields,
    get: <F extends (keyof WebsiteCreativeAssetSuggestionsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WebsiteCreativeAssetSuggestionsFields, F[number]>>(`${id}`, opts),
  };
}

