// @generated
// fingerprint: sha256:1760d593e484405d1913c7e275a3153de15d08e8bb721118e9556e186887bb16
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface ManagementSiteLinkFields {
  ad_account_id: string;
  id: string;
  link_domain: string;
  link_hash: string;
  link_image_hash: string;
  link_image_url: string;
  link_title: string;
  link_type: string;
  link_url: string;
}

export function managementSiteLinkNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ManagementSiteLinkFields,
    get: <F extends (keyof ManagementSiteLinkFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ManagementSiteLinkFields, F[number]>>(`${id}`, opts),
  };
}

