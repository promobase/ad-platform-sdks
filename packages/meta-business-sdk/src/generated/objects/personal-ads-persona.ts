// @generated
// fingerprint: sha256:a4cf1c8cec2c40f40e14b8e0cdfd0432c785dd7e677b245b7a39fa2ccfcaf321
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

