// @generated
// fingerprint: sha256:e2e03c828de7b5d1acf6e218e66dadf90d71adeffae66c74f3f3852d5944f460
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdsNamingTemplateLevel } from "../enums.ts";

export interface AdsNamingTemplateFields {
  api_fields: Record<string, Record<string, string>[]>[][];
  api_version: string;
  field_order: string[];
  id: string;
  level: AdsNamingTemplateLevel;
  separator: string;
  template_version: string;
  user_defined_fields: Record<string, string[]>[][];
  value_separator: string;
}

export function adsNamingTemplateNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsNamingTemplateFields,
    get: <F extends (keyof AdsNamingTemplateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsNamingTemplateFields, F[number]>>(`${id}`, opts),
  };
}

