// @generated
// fingerprint: sha256:f8a7954151203e5ec777a1cba6965262de4577876db0b4c1b6f6f385d9350893
// DO NOT EDIT: generated file; changes will be overwritten.
import type { DataLinkStatus, DataLinkType, YoutubeLinkMetadata, YoutubeVideoIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.DataLink. Do not edit by hand.
export interface DataLink {
  resourceName?: string;
  productLinkId?: string;
  dataLinkId?: string;
  type?: DataLinkType;
  status?: DataLinkStatus;
  youtubeVideo?: YoutubeVideoIdentifier;
  youtubeLinkMetadata?: YoutubeLinkMetadata;
}
