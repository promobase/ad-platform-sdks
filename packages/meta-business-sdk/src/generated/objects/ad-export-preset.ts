import type { ApiClient } from "@promobase/sdk-runtime";
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

