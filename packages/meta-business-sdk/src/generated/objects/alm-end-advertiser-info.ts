// @generated
// fingerprint: sha256:aa642b6dec70ad384751a1f875b035cc9a629d9e8acf3d2bd6eec4dc83e039b0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

