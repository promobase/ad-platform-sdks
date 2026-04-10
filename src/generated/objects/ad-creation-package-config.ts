import type { ApiClient } from "../../runtime/client.ts";

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
    get: <F extends (keyof AdCreationPackageConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdCreationPackageConfigFields, F[number]>>(`${id}`, opts),
  };
}

