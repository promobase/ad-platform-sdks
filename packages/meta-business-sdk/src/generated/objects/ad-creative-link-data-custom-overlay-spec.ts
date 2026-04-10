import type { AdCreativeLinkDataCustomOverlaySpecBackgroundColor, AdCreativeLinkDataCustomOverlaySpecFont, AdCreativeLinkDataCustomOverlaySpecOption, AdCreativeLinkDataCustomOverlaySpecPosition, AdCreativeLinkDataCustomOverlaySpecTemplate, AdCreativeLinkDataCustomOverlaySpecTextColor } from "../enums.ts";

export interface AdCreativeLinkDataCustomOverlaySpecFields {
  background_color: AdCreativeLinkDataCustomOverlaySpecBackgroundColor;
  float_with_margin: boolean;
  font: AdCreativeLinkDataCustomOverlaySpecFont;
  option: AdCreativeLinkDataCustomOverlaySpecOption;
  position: AdCreativeLinkDataCustomOverlaySpecPosition;
  render_with_icon: boolean;
  template: AdCreativeLinkDataCustomOverlaySpecTemplate;
  text_color: AdCreativeLinkDataCustomOverlaySpecTextColor;
}

