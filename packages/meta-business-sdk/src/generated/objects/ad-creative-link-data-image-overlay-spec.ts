import type { AdCreativeLinkDataImageOverlaySpecCustomTextType, AdCreativeLinkDataImageOverlaySpecOverlayTemplate, AdCreativeLinkDataImageOverlaySpecPosition, AdCreativeLinkDataImageOverlaySpecTextFont, AdCreativeLinkDataImageOverlaySpecTextType, AdCreativeLinkDataImageOverlaySpecThemeColor } from "../enums.ts";

export interface AdCreativeLinkDataImageOverlaySpecFields {
  custom_text_type: AdCreativeLinkDataImageOverlaySpecCustomTextType;
  float_with_margin: boolean;
  overlay_template: AdCreativeLinkDataImageOverlaySpecOverlayTemplate;
  position: AdCreativeLinkDataImageOverlaySpecPosition;
  text_font: AdCreativeLinkDataImageOverlaySpecTextFont;
  text_template_tags: string[];
  text_type: AdCreativeLinkDataImageOverlaySpecTextType;
  theme_color: AdCreativeLinkDataImageOverlaySpecThemeColor;
}

