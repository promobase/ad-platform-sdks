// @generated
// fingerprint: sha256:4b6dff8df5edbd5091ea2e912f3c474106688693ee9a3e26b28a64f45c5af714
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as ContentBlockListFields,
    get: <F extends (keyof ContentBlockListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ContentBlockListFields, F[number]>>(`${id}`, opts),
    appliedAdAccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/applied_ad_accounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    facebookContent: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/facebook_content`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    instagramContent: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/instagram_content`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

