import type { ApiClient } from "../../runtime/client.ts";

export interface AvatarFields {
  id: string;
}

export function avatarNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AvatarFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AvatarFields, F[number]>>(`${id}`, opts),
  };
}

