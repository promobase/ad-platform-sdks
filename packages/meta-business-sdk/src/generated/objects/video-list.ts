// @generated
// fingerprint: sha256:12c80bc565e0b90b44c24f9fcc9ace3721431d8f153573fdfee9395e657372cd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
      new Cursor<Pick<AdVideoFields, F[number]>>(client, `${id}/videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

