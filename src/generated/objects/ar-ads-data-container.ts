import type { ApiClient } from "../../runtime/client.ts";

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
    get: <F extends (keyof ArAdsDataContainerFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ArAdsDataContainerFields, F[number]>>(`${id}`, opts),
  };
}

