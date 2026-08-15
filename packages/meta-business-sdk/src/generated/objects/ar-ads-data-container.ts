// @generated
// fingerprint: sha256:dda69a66248dbd2113019e37c939633a605201e8d95986edbc46c934e1d57c0f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface ArAdsDataContainerFields {
  camera_facing_override: string;
  creation_time: string;
  effect: Record<string, unknown>[];
  id: string;
  is_published: boolean;
  last_modified_time: string;
  name: string;
}

export function arAdsDataContainerNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ArAdsDataContainerFields,
    get: <F extends (keyof ArAdsDataContainerFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ArAdsDataContainerFields, F[number]>>(`${id}`, opts),
  };
}

