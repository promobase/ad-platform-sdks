import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdsNamingTemplateFields {
  api_fields: Record<string, Record<string, string>[]>[][];
  api_version: string;
  field_order: string[];
  id: string;
  level: string;
  separator: string;
  template_version: string;
  user_defined_fields: Record<string, string[]>[][];
  value_separator: string;
}

export function adsNamingTemplateNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsNamingTemplateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsNamingTemplateFields, F[number]>>(`${id}`, opts),
  };
}

