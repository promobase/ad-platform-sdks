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
