export interface CopyrightAudioAssetFields {
  audio_availability_status: string;
  audio_library_policy: Record<string, Record<string, Record<string, unknown>>[]>[];
  creation_time: string;
  id: string;
  reference_files: Record<string, unknown>[];
  title: string;
  update_time: string;
}

