// @generated
// fingerprint: sha256:a5feb17123c6d4ab5a32a6e0399faaf299b2e04d6a5250cb89bc3f0365575c69
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AudioAssetFields } from "./audio-asset.ts";

export interface AudioIsrcFields {
  all_kg_featured_artists: string;
  all_kg_main_artists: string;
  artist_profile_picture_url: string;
  canonical_audio_asset: AudioAssetFields;
  id: string;
  isrc: string;
  publishing_rights_data: Record<string, unknown>;
  top_searchable_artist_id: string;
  top_searchable_artist_name: string;
  top_searchable_artist_profile_pic_url: string;
}

export function audioIsrcNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AudioIsrcFields,
    get: <F extends (keyof AudioIsrcFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AudioIsrcFields, F[number]>>(`${id}`, opts),
  };
}

