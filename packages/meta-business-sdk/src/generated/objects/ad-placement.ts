import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdPlacementFields {
  bundle_id: string;
  display_format: string;
  external_placement_id: string;
  google_display_format: string;
  id: string;
  name: string;
  placement_group: Record<string, unknown>;
  platform: string;
  status: string;
}

export function adPlacementNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdPlacementFields,
    get: <F extends (keyof AdPlacementFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdPlacementFields, F[number]>>(`${id}`, opts),
  };
}

