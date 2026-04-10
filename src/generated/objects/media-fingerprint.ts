import type { ApiClient } from "../../runtime/client.ts";

export interface MediaFingerprintFields {
  duration_in_sec: number;
  fingerprint_content_type: string;
  fingerprint_type: string;
  id: string;
  metadata: Record<string, unknown>;
  title: string;
  universal_content_id: string;
}

export interface MediaFingerprintUpdateParams {
  metadata?: unknown[];
  source?: File | Blob | ReadableStream;
  title?: string;
  universal_content_id?: string;
  [key: string]: unknown;
}

export function mediaFingerprintNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof MediaFingerprintFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MediaFingerprintFields, F[number]>>(`${id}`, opts),
    update: (params: MediaFingerprintUpdateParams) =>
      client.post<MediaFingerprintFields>(`${id}`, params as Record<string, unknown>),
  };
}

