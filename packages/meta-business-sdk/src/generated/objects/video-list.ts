import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdVideoFields } from "./ad-video.ts";

export interface VideoListFields {
  creation_time: string;
  description: string;
  id: string;
  last_modified: string;
  owner: Record<string, unknown>;
  season_number: number;
  thumbnail: string;
  title: string;
  videos_count: number;
}

export function videoListNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as VideoListFields,
    get: <F extends (keyof VideoListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoListFields, F[number]>>(`${id}`, opts),
    videos: <F extends (keyof AdVideoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

