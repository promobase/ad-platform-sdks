import type { ApiClient } from "@promobase/sdk-runtime";

export interface LiveVideoInputStreamFields {
  dash_ingest_url: string;
  dash_preview_url: string;
  id: string;
  is_master: boolean;
  secure_stream_url: string;
  stream_health: Record<string, unknown>;
  stream_id: string;
  stream_url: string;
}

export function liveVideoInputStreamNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LiveVideoInputStreamFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LiveVideoInputStreamFields, F[number]>>(`${id}`, opts),
  };
}

