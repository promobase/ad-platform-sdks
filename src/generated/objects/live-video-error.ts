import type { ApiClient } from "../../runtime/client.ts";

export interface LiveVideoErrorFields {
  creation_time: string;
  error_code: number;
  error_message: string;
  error_type: string;
}

export function liveVideoErrorNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LiveVideoErrorFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LiveVideoErrorFields, F[number]>>(`${id}`, opts),
  };
}

