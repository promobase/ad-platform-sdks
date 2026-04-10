import type { ApiClient } from "../../runtime/client.ts";
import type { IGResumableVideoUploadStatusFields } from "./ig-resumable-video-upload-status.ts";
import type { IGVideoCopyrightCheckStatusFields } from "./ig-video-copyright-check-status.ts";
import type { StatusFields } from "./status.ts";
import type { VideoCopyrightCheckStatusFields } from "./video-copyright-check-status.ts";

export interface ShadowIGMediaBuilderFields {
  copyright_check_status: IGVideoCopyrightCheckStatusFields;
  id: string;
  status: string;
  status_code: string;
  video_status: IGResumableVideoUploadStatusFields;
}

export function shadowIGMediaBuilderNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ShadowIGMediaBuilderFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ShadowIGMediaBuilderFields, F[number]>>(`${id}`, opts),
  };
}

