// @generated
// fingerprint: sha256:23235a7d5adae2821037dd175e36163371d65383b8f611be1d8bc2faa15bbd04
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessCreativeFolderFields {
  business: BusinessFields;
  creation_time: string;
  creative_insight_permissions: Record<string, string>[];
  description: string;
  id: string;
  media_library_url: string;
  name: string;
  owner_business: BusinessFields;
}

export function businessCreativeFolderNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessCreativeFolderFields,
    get: <F extends (keyof BusinessCreativeFolderFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessCreativeFolderFields, F[number]>>(`${id}`, opts),
  };
}

