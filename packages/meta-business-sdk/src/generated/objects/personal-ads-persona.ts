import type { ApiClient } from "@promobase/sdk-runtime";

export interface PersonalAdsPersonaFields {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  pending_email: string;
}

export function personalAdsPersonaNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PersonalAdsPersonaFields,
    get: <F extends (keyof PersonalAdsPersonaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PersonalAdsPersonaFields, F[number]>>(`${id}`, opts),
  };
}

