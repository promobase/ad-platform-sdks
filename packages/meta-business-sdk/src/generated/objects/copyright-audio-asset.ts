import type { AudioAssetFields } from "./audio-asset.ts";

export interface CopyrightAudioAssetFields {
  audio_availability_status: string;
  audio_library_policy: Record<string, Record<string, Record<string, unknown>>[]>[];
  canonical_reference_file: AudioAssetFields;
  creation_time: string;
  id: string;
  reference_file_isrcs: string[];
  reference_files: Record<string, unknown>[];
  representative_reference_file: AudioAssetFields;
  title: string;
  update_time: string;
}

