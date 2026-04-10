import type { ApiClient } from "../../runtime/client.ts";
import type { BusinessFields } from "./business.ts";

export interface AdImageFields {
  account_id: string;
  created_time: string;
  creatives: string[];
  hash: string;
  height: number;
  id: string;
  is_associated_creatives_in_adgroups: boolean;
  name: string;
  original_height: number;
  original_width: number;
  owner_business: BusinessFields;
  permalink_url: string;
  status: string;
  updated_time: string;
  url: string;
  url_128: string;
  width: number;
}

export function adImageNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdImageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdImageFields, F[number]>>(`${id}`, opts),
  };
}

