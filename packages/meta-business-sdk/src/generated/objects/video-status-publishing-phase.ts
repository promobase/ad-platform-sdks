import type { VideoStatusErrorFields } from "./video-status-error.ts";

export interface VideoStatusPublishingPhaseFields {
  errors: VideoStatusErrorFields[];
  publish_status: string;
  publish_time: string;
  status: string;
}

