import type { ApiClient } from "@promobase/sdk-runtime";

export interface IGRefreshAccessTokenForIGOnlyAPIFields {
  access_token: string;
  expires_in: number;
  permissions: string;
  token_type: string;
}

export function iGRefreshAccessTokenForIGOnlyAPINode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as IGRefreshAccessTokenForIGOnlyAPIFields,
    get: <F extends (keyof IGRefreshAccessTokenForIGOnlyAPIFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGRefreshAccessTokenForIGOnlyAPIFields, F[number]>>(`${id}`, opts),
  };
}

