// @generated
// fingerprint: sha256:31d3305a83d324a949858b146955b7427a6411ccf77734b6e0abd29a412ee0e0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { PageFields } from "./page.ts";

export interface PageLeadsAccessConfigFields {
  id: string;
  page: PageFields;
}

export function pageLeadsAccessConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PageLeadsAccessConfigFields,
    get: <F extends (keyof PageLeadsAccessConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PageLeadsAccessConfigFields, F[number]>>(`${id}`, opts),
  };
}

