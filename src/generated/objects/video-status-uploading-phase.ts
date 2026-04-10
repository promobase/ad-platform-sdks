import type { VideoStatusErrorFields } from "./video-status-error.ts";

export interface VideoStatusUploadingPhaseFields {
  bytes_transferred: number;
  errors: VideoStatusErrorFields[];
  source_file_size: number;
  status: string;
}

