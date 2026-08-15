// @generated
// fingerprint: sha256:f3540241309d22545237990c25d214459d486fbb91c20fc30da3cd6422650399
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AudioSubLabelFields {
  expiration_timestamp: string;
  flagged_timestamp: string;
  id: string;
  label_name: string;
  last_update_timestamp: string;
  num_audio_tracks: number;
  state: string;
}

export function audioSubLabelNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AudioSubLabelFields,
    get: <F extends (keyof AudioSubLabelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AudioSubLabelFields, F[number]>>(`${id}`, opts),
  };
}

