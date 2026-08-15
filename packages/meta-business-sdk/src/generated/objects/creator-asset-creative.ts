// @generated
// fingerprint: sha256:18ccd34ee09ef9c8cd0e770b5a48a9ca7efff486e204129488d56796ef98f331
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface CreatorAssetCreativeFields {
  id: string;
  image_url: string;
  moderation_status: string;
  product_item_retailer_id: string;
  product_url: string;
  retailer_id: string;
  video_url: string;
}

export function creatorAssetCreativeNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CreatorAssetCreativeFields,
    get: <F extends (keyof CreatorAssetCreativeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CreatorAssetCreativeFields, F[number]>>(`${id}`, opts),
  };
}

