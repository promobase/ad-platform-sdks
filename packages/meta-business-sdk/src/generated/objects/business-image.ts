// @generated
// fingerprint: sha256:fa5f74df3a026c7668e4351eb3150c7c5fc1dedf79fa9320524da628af6fa93f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessImageFields {
  business: BusinessFields;
  creation_time: string;
  hash: string;
  height: number;
  id: string;
  media_library_url: string;
  name: string;
  url: string;
  url_128: string;
  width: number;
}

export function businessImageNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessImageFields,
    get: <F extends (keyof BusinessImageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessImageFields, F[number]>>(`${id}`, opts),
  };
}

