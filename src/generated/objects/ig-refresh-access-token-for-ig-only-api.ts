import type { ApiClient } from "../../runtime/client.ts";

export interface IGRefreshAccessTokenForIGOnlyAPIFields {
  access_token: string;
  expires_in: number;
  permissions: string;
  token_type: string;
}

export function iGRefreshAccessTokenForIGOnlyAPINode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGRefreshAccessTokenForIGOnlyAPIFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGRefreshAccessTokenForIGOnlyAPIFields, F[number]>>(`${id}`, opts),
  };
}

