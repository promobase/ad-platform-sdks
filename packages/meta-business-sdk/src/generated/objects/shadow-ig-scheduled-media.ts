import type { ApiClient } from "@promobase/sdk-runtime";

export interface ShadowIGScheduledMediaFields {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  publish_timestamp: number;
  thumbnail_url: string;
}

export function shadowIGScheduledMediaNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ShadowIGScheduledMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ShadowIGScheduledMediaFields, F[number]>>(`${id}`, opts),
  };
}

