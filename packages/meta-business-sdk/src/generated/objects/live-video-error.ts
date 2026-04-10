import type { ApiClient } from "@promobase/sdk-runtime";

export interface LiveVideoErrorFields {
  creation_time: string;
  error_code: number;
  error_message: string;
  error_type: string;
}

export function liveVideoErrorNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as LiveVideoErrorFields,
    get: <F extends (keyof LiveVideoErrorFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LiveVideoErrorFields, F[number]>>(`${id}`, opts),
  };
}

