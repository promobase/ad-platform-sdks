import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdVideoFields } from "./ad-video.ts";
import type { CanvasCollectionThumbnailFields } from "./canvas-collection-thumbnail.ts";
import type { CanvasDynamicSettingFields } from "./canvas-dynamic-setting.ts";
import type { CanvasPreviewFields } from "./canvas-preview.ts";
import type { CanvasTemplateFields } from "./canvas-template.ts";
import type { PageFields } from "./page.ts";
import type { PhotoFields } from "./photo.ts";
import type { RichMediaElementFields } from "./rich-media-element.ts";
import type { TextWithEntitiesFields } from "./text-with-entities.ts";
import type { UserFields } from "./user.ts";

export interface CanvasFields {
  background_color: string;
  body_elements: Record<string, unknown>[];
  business_id: string;
  canvas_link: string;
  collection_hero_image: PhotoFields;
  collection_hero_video: AdVideoFields;
  collection_thumbnails: CanvasCollectionThumbnailFields[];
  dynamic_setting: CanvasDynamicSettingFields;
  element_payload: string;
  elements: RichMediaElementFields[];
  fb_body_elements: Record<string, unknown>[];
  hero_asset_facebook_post_id: string;
  hero_asset_instagram_media_id: string;
  id: string;
  is_hidden: boolean;
  is_published: boolean;
  last_editor: UserFields;
  linked_documents: CanvasFields[];
  name: string;
  owner: PageFields;
  property_list: string[];
  source_template: CanvasTemplateFields;
  store_url: string;
  style_list: string[];
  tags: string[];
  ui_property_list: string[];
  unused_body_elements: Record<string, unknown>[];
  update_time: number;
  use_retailer_item_ids: boolean;
}

export interface CanvasListPreviewsParams {
  user_ids?: number[];
  [key: string]: unknown;
}

export interface CanvasUpdateParams {
  background_color?: string;
  body_element_ids?: string[];
  enable_swipe_to_open?: boolean;
  hero_asset_facebook_post_id?: string;
  hero_asset_instagram_media_id?: string;
  is_hidden?: boolean;
  is_published?: boolean;
  name?: string;
  source_template_id?: string;
  [key: string]: unknown;
}

export function canvasNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CanvasFields,
    get: <F extends (keyof CanvasFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CanvasFields, F[number]>>(`${id}`, opts),
    update: (params: CanvasUpdateParams) =>
      client.post<CanvasFields>(`${id}`, params as Record<string, unknown>),
    preview: <F extends (keyof CanvasPreviewFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CanvasPreviewFields, F[number]>>(client, `${id}/preview`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    previews: <F extends (keyof TextWithEntitiesFields)[]>(opts: { fields: F; params?: CanvasListPreviewsParams }) =>
      new Cursor<Pick<TextWithEntitiesFields, F[number]>>(client, `${id}/previews`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

