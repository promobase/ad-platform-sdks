import type { ApiClient } from "@promobase/sdk-runtime";

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
    get: <F extends (keyof CreatorAssetCreativeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CreatorAssetCreativeFields, F[number]>>(`${id}`, opts),
  };
}

