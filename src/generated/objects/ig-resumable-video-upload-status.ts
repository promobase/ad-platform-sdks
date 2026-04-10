import type { VideoStatusProcessingPhaseFields } from "./video-status-processing-phase.ts";
import type { VideoStatusUploadingPhaseFields } from "./video-status-uploading-phase.ts";

export interface IGResumableVideoUploadStatusFields {
  processing_phase: VideoStatusProcessingPhaseFields;
  uploading_phase: VideoStatusUploadingPhaseFields;
}

