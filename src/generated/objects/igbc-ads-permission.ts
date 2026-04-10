import type { ApiClient } from "../../runtime/client.ts";

export interface IGBCAdsPermissionFields {
  id: string;
  permission_type: string;
  status: string;
}

export function iGBCAdsPermissionNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGBCAdsPermissionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGBCAdsPermissionFields, F[number]>>(`${id}`, opts),
  };
}

