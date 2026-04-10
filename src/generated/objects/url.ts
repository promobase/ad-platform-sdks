import type { ApiClient } from "../../runtime/client.ts";

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
    get: <F extends (keyof URLFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<URLFields, F[number]>>(`${id}`, opts),
    update: (params: URLUpdateParams) =>
      client.post<URLFields>(`${id}`, params as Record<string, unknown>),
  };
}

