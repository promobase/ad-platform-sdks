import type { ApiClient } from "@promobase/sdk-runtime";

export interface WithAsset3DFields {
  id: string;
}

export function withAsset3DNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WithAsset3DFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WithAsset3DFields, F[number]>>(`${id}`, opts),
  };
}

