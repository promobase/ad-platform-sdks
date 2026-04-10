import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface PlayableContentFields {
  id: string;
  name: string;
  owner: ProfileFields;
}

export function playableContentNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PlayableContentFields,
    get: <F extends (keyof PlayableContentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PlayableContentFields, F[number]>>(`${id}`, opts),
  };
}

