// @generated
// fingerprint: sha256:cfe52c163c499597d8a4edcef490c556be57db36151f91314c7d62cdcad3e36f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";
import type { AdImageStatus } from "../enums.ts";

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
  status: AdImageStatus;
  updated_time: string;
  url: string;
  url_128: string;
  width: number;
}

export function adImageNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdImageFields,
    get: <F extends (keyof AdImageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdImageFields, F[number]>>(`${id}`, opts),
  };
}

