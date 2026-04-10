import type { ApiClient } from "@promobase/sdk-runtime";

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

