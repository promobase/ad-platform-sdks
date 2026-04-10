import type { ApiClient } from "../../runtime/client.ts";
import type { PageFields } from "./page.ts";

export interface AudioAssetFields {
  all_ddex_featured_artists: string;
  all_ddex_main_artists: string;
  audio_cluster_id: string;
  cover_image_source: string;
  description: string;
  display_artist: string;
  download_hd_url: string;
  download_sd_url: string;
  duration_in_ms: number;
  freeform_genre: string;
  grid: string;
  id: string;
  is_test: boolean;
  original_release_date: string;
  owner: PageFields;
  parental_warning_type: string;
  subtitle: string;
  title: string;
  title_with_featured_artists: string;
  upc: string;
}

export function audioAssetNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AudioAssetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AudioAssetFields, F[number]>>(`${id}`, opts),
  };
}

