import type { ApiClient } from "@promobase/sdk-runtime";
import type { VideoCopyrightFields } from "./video-copyright.ts";

export interface CopyrightMediaMisuseFields {
  audio_segments: Record<string, unknown>[];
  creation_time: string;
  disabled_audio_segments: Record<string, unknown>[];
  disabled_video_segments: Record<string, unknown>[];
  entire_file_issue: boolean;
  entire_file_issue_reasons: string[];
  expiration_time: string;
  id: string;
  media_asset_id: string;
  reasons: string[];
  requested_audio_segments: Record<string, unknown>[];
  requested_video_segments: Record<string, unknown>[];
  resolution_type: string;
  status: string;
  update_time: string;
  video_copyright: VideoCopyrightFields;
  video_segments: Record<string, unknown>[];
}

export function copyrightMediaMisuseNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CopyrightMediaMisuseFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CopyrightMediaMisuseFields, F[number]>>(`${id}`, opts),
  };
}

