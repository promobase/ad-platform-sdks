// @generated
// fingerprint: sha256:a49c10a6ef38b1e0e8928ce9f6b412ff82465c08828c727f3aafe7d66325b960
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

