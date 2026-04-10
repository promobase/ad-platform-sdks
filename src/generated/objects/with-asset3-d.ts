import type { ApiClient } from "../../runtime/client.ts";

export interface WithAsset3DFields {
  id: string;
}

export function withAsset3DNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WithAsset3DFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WithAsset3DFields, F[number]>>(`${id}`, opts),
  };
}

