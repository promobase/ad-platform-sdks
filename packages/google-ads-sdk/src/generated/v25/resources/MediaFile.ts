// @generated
// fingerprint: sha256:65eb8be75ab11ab11b045e72a0c81634a920137be0b6d938d5a9811854fc2b16
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MediaAudio, MediaBundle, MediaImage, MediaType, MediaVideo, MimeType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.MediaFile. Do not edit by hand.
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
