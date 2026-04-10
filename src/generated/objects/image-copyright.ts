import type { ApiClient } from "../../runtime/client.ts";
import type { PhotoFields } from "./photo.ts";
import type { VideoCopyrightGeoGateFields } from "./video-copyright-geo-gate.ts";

export interface ImageCopyrightFields {
  artist: string;
  copyright_monitoring_status: string;
  creation_time: string;
  creator: string;
  custom_id: string;
  description: string;
  filename: string;
  id: string;
  image: PhotoFields;
  matches_count: number;
  original_content_creation_date: string;
  ownership_countries: VideoCopyrightGeoGateFields;
  tags: string[];
  title: string;
  update_time: string;
}

export interface ImageCopyrightUpdateParams {
  artist?: string;
  creator?: string;
  custom_id?: string;
  description?: string;
  geo_ownership?: string[];
  original_content_creation_date?: number;
  title?: string;
  [key: string]: unknown;
}

export function imageCopyrightNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ImageCopyrightFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ImageCopyrightFields, F[number]>>(`${id}`, opts),
    update: (params: ImageCopyrightUpdateParams) =>
      client.post<ImageCopyrightFields>(`${id}`, params as Record<string, unknown>),
  };
}

