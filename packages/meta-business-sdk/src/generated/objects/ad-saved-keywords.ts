// @generated
// fingerprint: sha256:52c8d9e10a3d8ba8c757087cf4279e6b91adc330863035ee9e4e82981e996865
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdKeywordsFields } from "./ad-keywords.ts";

export interface AdSavedKeywordsFields {
  account: AdAccountFields;
  id: string;
  keywords: AdKeywordsFields;
  name: string;
  run_status: string;
  time_created: string;
  time_updated: string;
}

export function adSavedKeywordsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdSavedKeywordsFields,
    get: <F extends (keyof AdSavedKeywordsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdSavedKeywordsFields, F[number]>>(`${id}`, opts),
  };
}

