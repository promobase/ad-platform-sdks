import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";

export interface VideoPollFields {
  close_after_voting: boolean;
  default_open: boolean;
  id: string;
  question: string;
  show_gradient: boolean;
  show_results: boolean;
  status: string;
}

export interface VideoPollUpdateParams {
  action?: string;
  close_after_voting?: boolean;
  default_open?: boolean;
  show_gradient?: boolean;
  show_results?: boolean;
  [key: string]: unknown;
}

export function videoPollNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof VideoPollFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoPollFields, F[number]>>(`${id}`, opts),
    update: (params: VideoPollUpdateParams) =>
      client.post<VideoPollFields>(`${id}`, params as Record<string, unknown>),
    pollOptions: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/poll_options`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

