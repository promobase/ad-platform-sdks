// @generated
// fingerprint: sha256:406c553218da51a7362040203214f574579e4ff0a3bb3c92ad42bf4fdecdf187
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdVideoFields } from "./ad-video.ts";
import type { BusinessFields } from "./business.ts";

export interface BusinessVideoFields {
  business: BusinessFields;
  id: string;
  media_library_url: string;
  name: string;
  video: AdVideoFields;
}

export function businessVideoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessVideoFields,
    get: <F extends (keyof BusinessVideoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessVideoFields, F[number]>>(`${id}`, opts),
  };
}

