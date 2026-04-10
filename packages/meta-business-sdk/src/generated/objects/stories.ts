import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
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
    get: <F extends (keyof StoriesFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<StoriesFields, F[number]>>(`${id}`, opts),
    insights: <F extends (keyof InsightsResultFields)[]>(opts: { fields: F; params?: StoriesListInsightsParams }) =>
      new Cursor<Pick<InsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

