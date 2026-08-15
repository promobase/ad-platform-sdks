// @generated
// fingerprint: sha256:35c1dc7f6eea461f96d25dd6b0dc10453bbf34ebde1b8cfead4a4322d4dc7d1b
// DO NOT EDIT: generated file; changes will be overwritten.
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

