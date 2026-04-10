import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
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
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

