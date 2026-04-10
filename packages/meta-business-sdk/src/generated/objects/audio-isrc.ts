import type { ApiClient } from "@promobase/sdk-runtime";

export interface AudioIsrcFields {
  all_kg_featured_artists: string;
  all_kg_main_artists: string;
  artist_profile_picture_url: string;
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

