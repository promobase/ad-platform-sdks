import type { AdCreativeLinkDataImageLayerSpecBlendingMode, AdCreativeLinkDataImageLayerSpecFrameSource, AdCreativeLinkDataImageLayerSpecImageSource, AdCreativeLinkDataImageLayerSpecLayerType, AdCreativeLinkDataImageLayerSpecOverlayPosition, AdCreativeLinkDataImageLayerSpecOverlayShape, AdCreativeLinkDataImageLayerSpecTextFont } from "../enums.ts";

export interface AdCreativeLinkDataImageLayerSpecFields {
  blending_mode: AdCreativeLinkDataImageLayerSpecBlendingMode;
  content: Record<string, unknown>;
  frame_auto_show_enroll_status: string;
  frame_image_hash: string;
  frame_source: AdCreativeLinkDataImageLayerSpecFrameSource;
  image_source: AdCreativeLinkDataImageLayerSpecImageSource;
  layer_type: AdCreativeLinkDataImageLayerSpecLayerType;
  opacity: number;
  overlay_position: AdCreativeLinkDataImageLayerSpecOverlayPosition;
  overlay_shape: AdCreativeLinkDataImageLayerSpecOverlayShape;
  scale: number;
  shape_color: string;
  text_color: string;
  text_font: AdCreativeLinkDataImageLayerSpecTextFont;
}

