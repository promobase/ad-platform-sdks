import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
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
    get: <F extends (keyof ShadowIGHashtagFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ShadowIGHashtagFields, F[number]>>(`${id}`, opts),
    recentMedia: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: ShadowIGHashtagListRecentMediaParams }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/recent_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    topMedia: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: ShadowIGHashtagListTopMediaParams }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/top_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

