import type { ApiClient } from "../../runtime/client.ts";

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
    get: <F extends (keyof ManagementSiteLinkFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ManagementSiteLinkFields, F[number]>>(`${id}`, opts),
  };
}

