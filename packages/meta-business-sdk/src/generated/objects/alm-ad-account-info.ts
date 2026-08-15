// @generated
// fingerprint: sha256:322f06042d70ef1e0afb5c9b93f3327098d743d46dc28bd1832d50f21c0464cd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as ALMAdAccountInfoFields,
    get: <F extends (keyof ALMAdAccountInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ALMAdAccountInfoFields, F[number]>>(`${id}`, opts),
  };
}

