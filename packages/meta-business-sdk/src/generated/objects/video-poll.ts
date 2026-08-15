// @generated
// fingerprint: sha256:8115443ecc307e82c97c4b0426c76a70d37e444f2bc0a885ab36f68cacf4099c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { VideoPollStatus } from "../enums.ts";

export interface VideoPollFields {
  close_after_voting: boolean;
  default_open: boolean;
  id: string;
  question: string;
  show_gradient: boolean;
  show_results: boolean;
  status: VideoPollStatus;
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
    __path: id,
    __brand: undefined as unknown as VideoPollFields,
    get: <F extends (keyof VideoPollFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoPollFields, F[number]>>(`${id}`, opts),
    update: (params: VideoPollUpdateParams) =>
      client.post<VideoPollFields>(`${id}`, params as Record<string, unknown>),
    pollOptions: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/poll_options`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

