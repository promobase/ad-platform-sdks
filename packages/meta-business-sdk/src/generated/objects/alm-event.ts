// @generated
// fingerprint: sha256:b68d94bbb2eb77971655bc4d487ab2cf225b99396b931aa8a49620524bc2e42c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface ALMEventFields {
  ad_account_ids: string[];
  campaign_ids: string[];
  channel: string;
  event: string;
  event_time: string;
  guidance: string;
  guidance_detail: string;
  guidance_type: string;
  id: string;
  parent_advertiser_ids: string[];
  reseller_business_id: string;
  solution_id: string;
  sub_channel: string;
  user_id: string;
}

export function aLMEventNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ALMEventFields,
    get: <F extends (keyof ALMEventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ALMEventFields, F[number]>>(`${id}`, opts),
  };
}

