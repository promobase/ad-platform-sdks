import type { ApiClient } from "../../runtime/client.ts";
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
    get: <F extends (keyof BusinessImageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessImageFields, F[number]>>(`${id}`, opts),
  };
}

