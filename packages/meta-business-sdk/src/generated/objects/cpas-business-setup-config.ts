// @generated
// fingerprint: sha256:68d8fb285b74599c52719a5536bb0f5c9c19d2418c522dbc022904296f5cd133
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BusinessFields } from "./business.ts";

export interface CPASBusinessSetupConfigFields {
  accepted_collab_ads_tos: boolean;
  business: BusinessFields;
  business_capabilities_status: Record<string, string>[];
  capabilities_compliance_status: Record<string, Record<string, unknown>>[];
  id: string;
}

export function cPASBusinessSetupConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CPASBusinessSetupConfigFields,
    get: <F extends (keyof CPASBusinessSetupConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASBusinessSetupConfigFields, F[number]>>(`${id}`, opts),
    adAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

