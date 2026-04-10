import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BusinessFields } from "./business.ts";
import type { IGMediaFields } from "./ig-media.ts";

export interface ContentBlockListFields {
  business: BusinessFields;
  id: string;
  name: string;
}

export function contentBlockListNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ContentBlockListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ContentBlockListFields, F[number]>>(`${id}`, opts),
    appliedAdAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/applied_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    facebookContent: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/facebook_content`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    instagramContent: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/instagram_content`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

