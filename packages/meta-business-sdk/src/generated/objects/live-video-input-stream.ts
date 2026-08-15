// @generated
// fingerprint: sha256:4e4a182386cb7071d2b144dcae9de7b5fa7c2d8dcf5da43f793e3a9261897de4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as LiveVideoInputStreamFields,
    get: <F extends (keyof LiveVideoInputStreamFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LiveVideoInputStreamFields, F[number]>>(`${id}`, opts),
  };
}

