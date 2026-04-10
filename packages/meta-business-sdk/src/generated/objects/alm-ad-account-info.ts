import type { ApiClient } from "@promobase/sdk-runtime";

export interface ALMAdAccountInfoFields {
  ad_account_id: string;
  id: string;
  managed_by: string;
  owned_by: string;
  parent_advertiser_id: string;
  sub_vertical: string;
  tag: string[];
  user_ids: string[];
  vertical: string;
}

export function aLMAdAccountInfoNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ALMAdAccountInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ALMAdAccountInfoFields, F[number]>>(`${id}`, opts),
  };
}

