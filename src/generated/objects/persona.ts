import type { ApiClient } from "../../runtime/client.ts";

export interface PersonaFields {
  id: string;
  name: string;
  profile_picture_url: string;
}

export function personaNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PersonaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PersonaFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

