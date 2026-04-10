import type { ApiClient } from "@promobase/sdk-runtime";

export interface ALMEndAdvertiserInfoFields {
  estimated_ad_budget: number;
  id: string;
  parent_advertiser_id: string;
  parent_advertiser_name: string;
  tag: string[];
}

export function aLMEndAdvertiserInfoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ALMEndAdvertiserInfoFields,
    get: <F extends (keyof ALMEndAdvertiserInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ALMEndAdvertiserInfoFields, F[number]>>(`${id}`, opts),
  };
}

