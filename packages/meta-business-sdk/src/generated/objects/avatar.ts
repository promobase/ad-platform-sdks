import type { ApiClient } from "@promobase/sdk-runtime";

export interface AvatarFields {
  id: string;
}

export function avatarNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AvatarFields,
    get: <F extends (keyof AvatarFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AvatarFields, F[number]>>(`${id}`, opts),
  };
}

