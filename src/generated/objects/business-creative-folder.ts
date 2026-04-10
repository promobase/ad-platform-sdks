import type { ApiClient } from "../../runtime/client.ts";
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
    get: <F extends (keyof BusinessCreativeFolderFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessCreativeFolderFields, F[number]>>(`${id}`, opts),
  };
}

