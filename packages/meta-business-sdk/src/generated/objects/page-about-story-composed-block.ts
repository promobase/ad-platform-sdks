import type { PageAboutStoryComposedBlockEntityRangesFields } from "./page-about-story-composed-block-entity-ranges.ts";
import type { PageAboutStoryComposedBlockInlineStyleFields } from "./page-about-story-composed-block-inline-style.ts";

export interface PageAboutStoryComposedBlockFields {
  depth: number;
  entity_ranges: PageAboutStoryComposedBlockEntityRangesFields[];
  inline_style_ranges: PageAboutStoryComposedBlockInlineStyleFields[];
  text: string;
  type: string;
}

