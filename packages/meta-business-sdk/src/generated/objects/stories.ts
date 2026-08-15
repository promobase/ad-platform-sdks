// @generated
// fingerprint: sha256:b5fbd8e0a3fbe79c6149a65ff958b1cdbab21da4441098abc9d863c2823a7a40
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { InsightsResultFields } from "./insights-result.ts";

export interface StoriesFields {
  creation_time: string;
  media_id: string;
  media_type: string;
  post_id: string;
  status: string;
  url: string;
}

export interface StoriesListInsightsParams {
  metric?: string[];
  [key: string]: unknown;
}

export function storiesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as StoriesFields,
    get: <F extends (keyof StoriesFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<StoriesFields, F[number]>>(`${id}`, opts),
    insights: <F extends (keyof InsightsResultFields)[]>(opts: { fields: F; params?: StoriesListInsightsParams }) =>
      new Cursor<Pick<InsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

