// @generated
// fingerprint: sha256:1c7b9f5a7c423d099017e9e4ef469817a7e2dc14c6017e88bd683db38a0ff7be
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface DynamicARMetadataFields {
  anchor_point: number[];
  container_effect_enum: number;
  effect_icon_url: string;
  effect_id: string;
  id: string;
  platforms: string[];
  scale_factor: number[];
  shadow_texture_url: string;
  source_url: string;
  state: string;
  tags: string[];
  variant_picker_url: string;
}

export function dynamicARMetadataNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as DynamicARMetadataFields,
    get: <F extends (keyof DynamicARMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<DynamicARMetadataFields, F[number]>>(`${id}`, opts),
  };
}

