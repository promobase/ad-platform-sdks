// @generated
// fingerprint: sha256:0d6c021d09ca753fb89f5a6cd25c6d59f6bcc1ed7edaa864af17f4cd95cb3289
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { UserFields } from "./user.ts";

export interface AdExportPresetFields {
  created_time: string;
  fields: string[];
  id: string;
  name: string;
  owner: UserFields;
  updated_time: string;
}

export function adExportPresetNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdExportPresetFields,
    get: <F extends (keyof AdExportPresetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdExportPresetFields, F[number]>>(`${id}`, opts),
  };
}

