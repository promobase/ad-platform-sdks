import type { ApiClient } from "@promobase/sdk-runtime";

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
    get: <F extends (keyof AudioSubLabelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AudioSubLabelFields, F[number]>>(`${id}`, opts),
  };
}

