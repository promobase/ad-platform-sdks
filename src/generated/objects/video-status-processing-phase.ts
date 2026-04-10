import type { VideoStatusErrorFields } from "./video-status-error.ts";

export interface VideoStatusProcessingPhaseFields {
  errors: VideoStatusErrorFields[];
  status: string;
}

