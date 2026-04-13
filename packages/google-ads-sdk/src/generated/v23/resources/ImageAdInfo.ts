import type { AdImageAsset, MimeType } from "../index.ts";

// Generated from google.ads.googleads.v23.common.ImageAdInfo. Do not edit by hand.
export interface ImageAdInfo {
  pixelWidth?: string;
  pixelHeight?: string;
  imageUrl?: string;
  previewPixelWidth?: string;
  previewPixelHeight?: string;
  previewImageUrl?: string;
  mimeType?: MimeType;
  name?: string;
  imageAsset?: AdImageAsset;
  data?: string;
  adIdToCopyImageFrom?: string;
}
