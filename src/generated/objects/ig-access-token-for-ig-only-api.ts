import type { ApiClient } from "../../runtime/client.ts";

export interface IGAccessTokenForIGOnlyAPIFields {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export function iGAccessTokenForIGOnlyAPINode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGAccessTokenForIGOnlyAPIFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGAccessTokenForIGOnlyAPIFields, F[number]>>(`${id}`, opts),
  };
}

