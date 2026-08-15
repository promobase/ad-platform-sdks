// @generated
// fingerprint: sha256:c617ad19f21c548cdb3005f732501890485e3ee0120bf1899fab95db1d3b075c
// DO NOT EDIT: generated file; changes will be overwritten.
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
