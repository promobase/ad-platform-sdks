// Auto-generated types for media — do not edit

import type { FileInput } from "../../api-client.ts";

export interface Media {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  type: string;
  media_status: string;
  file_name: string;
  download_link: string;
  duration_in_seconds: number;
  video_metadata: {
  width_px: number;
  height_px: number;
  rotation: unknown;
  integrated_loudness: unknown;
  true_peak: unknown;
};
  file_size_in_bytes: number;
  is_demo_media: boolean;
  hash: string;
  visibility: string;
  media_usages: unknown[];
}


export interface Preview {}


export interface Thumbnail {}


export interface LensPreview {}


export interface CreateMediaParams {
  adAccountId: string;
  name: string;
  type: string;
}


export interface UploadMediaParams {
  mediaId: string;
  file: FileInput;
  filename?: string;
}


export interface CopyMediaParams {
  destinationAdAccountId: string;
  source_media_id: string;
  source_ad_account_id: string;
}


export interface ListMediaParams {
  adAccountId: string;
  sort?: string;
  type?: "IMAGE" | "LENS_PACKAGE" | "VIDEO";
}


export interface GetMediaParams {
  mediaId: string;
}


export interface GetMediaByIdsParams {
  adAccountId: string;
  entity_ids: {
  id: string;
}[];
}


export interface GetMediaPreviewParams {
  mediaId: string;
}


export interface GetMediaThumbnailParams {
  mediaId: string;
}


export interface GetMediaLensPreviewParams {
  mediaId: string;
  "Media ID"?: string;
}
