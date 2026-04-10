import type { IGVideoCopyrightCheckStatusFields } from "./ig-video-copyright-check-status.ts";
import type { StatusFields } from "./status.ts";
import type { VideoCopyrightCheckStatusFields } from "./video-copyright-check-status.ts";

export interface IGVideoCopyrightCheckMatchesInformationFields {
  copyright_matches: Record<string, unknown>[];
  status: IGVideoCopyrightCheckStatusFields;
}

