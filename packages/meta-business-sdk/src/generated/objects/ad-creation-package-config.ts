// @generated
// fingerprint: sha256:ea8e75f8f7f93732b61aeb6b388bab5c0a22eff6e0e8757bf613a64646df6f4a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AdCreationPackageConfigFields {
  api_version: string;
  id: string;
  is_eligible_for_default_opt_in: boolean;
  objective: string;
  package_id: string;
  status: string;
}

export function adCreationPackageConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdCreationPackageConfigFields,
    get: <F extends (keyof AdCreationPackageConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdCreationPackageConfigFields, F[number]>>(`${id}`, opts),
  };
}

