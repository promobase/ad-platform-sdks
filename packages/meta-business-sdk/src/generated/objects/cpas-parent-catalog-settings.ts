// @generated
// fingerprint: sha256:8bf551afae5fb75c728e711381990ea173fe70fb8fd7e1c911f310722ef46069
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface CPASParentCatalogSettingsFields {
  attribution_windows: string[];
  default_currency: string;
  disable_use_as_parent_catalog: boolean;
  id: string;
}

export function cPASParentCatalogSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CPASParentCatalogSettingsFields,
    get: <F extends (keyof CPASParentCatalogSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASParentCatalogSettingsFields, F[number]>>(`${id}`, opts),
  };
}

