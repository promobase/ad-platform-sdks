import type { StatusFields } from "./status.ts";
import type { VideoCopyrightCheckStatusFields } from "./video-copyright-check-status.ts";
import type { VideoStatusProcessingPhaseFields } from "./video-status-processing-phase.ts";
import type { VideoStatusPublishingPhaseFields } from "./video-status-publishing-phase.ts";
import type { VideoStatusUploadingPhaseFields } from "./video-status-uploading-phase.ts";

export interface VideoStatusFields {
  copyright_check_status: VideoCopyrightCheckStatusFields;
  processing_phase: VideoStatusProcessingPhaseFields;
  processing_progress: number;
  publishing_phase: VideoStatusPublishingPhaseFields;
  uploading_phase: VideoStatusUploadingPhaseFields;
  video_status: string;
}

