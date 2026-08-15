// @generated
// fingerprint: sha256:404535fa27fef81a43746dd1ed10d3f96250d45bc568b2965c025aaa0299ddcd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface SavedMessageResponseFields {
  id: string;
  image: string;
  is_enabled: boolean;
  message: string;
  title: string;
}

export function savedMessageResponseNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as SavedMessageResponseFields,
    get: <F extends (keyof SavedMessageResponseFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SavedMessageResponseFields, F[number]>>(`${id}`, opts),
  };
}

