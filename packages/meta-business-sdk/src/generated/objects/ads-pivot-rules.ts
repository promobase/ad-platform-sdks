// @generated
// fingerprint: sha256:09a2cc181d0d380e0eeabca219f9d453023e416cb6f29cdfee69d67562ba4e0a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface AdsPivotRulesFields {
  creation_time: string;
  creator: ProfileFields;
  description: string;
  id: string;
  name: string;
  permission: string;
  rules: Record<string, unknown>[];
  scope: string;
  update_by: ProfileFields;
  update_time: string;
}

export function adsPivotRulesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsPivotRulesFields,
    get: <F extends (keyof AdsPivotRulesFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsPivotRulesFields, F[number]>>(`${id}`, opts),
  };
}

