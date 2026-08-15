// @generated
// fingerprint: sha256:e9ccbeaa5986ececc4b4ecbc50cc032a39ecffc67445aca93a6a2e90329c52e0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface SiteLinkFields {
  id: string;
  link_image_hash: string;
  link_title: string;
  link_type: string;
  link_url: string;
}

export function siteLinkNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as SiteLinkFields,
    get: <F extends (keyof SiteLinkFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SiteLinkFields, F[number]>>(`${id}`, opts),
  };
}

