// @generated
// fingerprint: sha256:2c244ba8867e45482f97145ac99537fdce93f69e57b0281746923b19f4edf4db
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { IGMediaFields } from "./ig-media.ts";

export interface ShadowIGHashtagFields {
  id: string;
  name: string;
}

export interface ShadowIGHashtagListRecentMediaParams {
  user_id: string;
  [key: string]: unknown;
}

export interface ShadowIGHashtagListTopMediaParams {
  user_id: string;
  [key: string]: unknown;
}

export function shadowIGHashtagNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ShadowIGHashtagFields,
    get: <F extends (keyof ShadowIGHashtagFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ShadowIGHashtagFields, F[number]>>(`${id}`, opts),
    recentMedia: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: ShadowIGHashtagListRecentMediaParams }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/recent_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    topMedia: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: ShadowIGHashtagListTopMediaParams }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/top_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

