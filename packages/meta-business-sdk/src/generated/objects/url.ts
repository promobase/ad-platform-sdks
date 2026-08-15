// @generated
// fingerprint: sha256:ba6577d0164e513906a906c99bc07d1bfa29eca6d07b7e12e7046b86d611b635
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface URLFields {
  engagement: Record<string, unknown>;
  id: string;
  og_object: Record<string, unknown>;
  ownership_permissions: Record<string, unknown>;
  scopes: Record<string, unknown>;
}

export interface URLUpdateParams {
  blacklist?: boolean;
  denylist?: boolean;
  hmac?: string;
  locale?: string[];
  scopes?: string[];
  ts?: string;
  [key: string]: unknown;
}

export function uRLNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as URLFields,
    get: <F extends (keyof URLFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<URLFields, F[number]>>(`${id}`, opts),
    update: (params: URLUpdateParams) =>
      client.post<URLFields>(`${id}`, params as Record<string, unknown>),
  };
}

