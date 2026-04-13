import type { MediaAudio, MediaBundle, MediaImage, MediaType, MediaVideo, MimeType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.MediaFile. Do not edit by hand.
export interface MediaFile {
  resourceName?: string;
  id?: string;
  type?: MediaType;
  mimeType?: MimeType;
  sourceUrl?: string;
  name?: string;
  fileSize?: string;
  image?: MediaImage;
  mediaBundle?: MediaBundle;
  audio?: MediaAudio;
  video?: MediaVideo;
}
