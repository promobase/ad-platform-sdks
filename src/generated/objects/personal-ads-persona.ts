import type { ApiClient } from "../../runtime/client.ts";

export interface PersonalAdsPersonaFields {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  pending_email: string;
}

export function personalAdsPersonaNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PersonalAdsPersonaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PersonalAdsPersonaFields, F[number]>>(`${id}`, opts),
  };
}

