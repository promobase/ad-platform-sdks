// @generated
// fingerprint: sha256:c3fbd47234175a02ac7f35c2c4977e726258184f4397c8b2d6634878752efc36
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as MediaFingerprintFields,
    get: <F extends (keyof MediaFingerprintFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MediaFingerprintFields, F[number]>>(`${id}`, opts),
    update: (params: MediaFingerprintUpdateParams) =>
      client.post<MediaFingerprintFields>(`${id}`, params as Record<string, unknown>),
  };
}

