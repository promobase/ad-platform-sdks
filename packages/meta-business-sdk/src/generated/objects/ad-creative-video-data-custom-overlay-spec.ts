import type { AdCreativeVideoDataCustomOverlaySpecBackgroundOpacity, AdCreativeVideoDataCustomOverlaySpecOption, AdCreativeVideoDataCustomOverlaySpecPosition, AdCreativeVideoDataCustomOverlaySpecTemplate } from "../enums.ts";

export interface AdCreativeVideoDataCustomOverlaySpecFields {
  background_color: string;
  background_opacity: AdCreativeVideoDataCustomOverlaySpecBackgroundOpacity;
  duration: number;
  float_with_margin: boolean;
  full_width: boolean;
  option: AdCreativeVideoDataCustomOverlaySpecOption;
  position: AdCreativeVideoDataCustomOverlaySpecPosition;
  start: number;
  template: AdCreativeVideoDataCustomOverlaySpecTemplate;
  text_color: string;
}

