// @generated
// fingerprint: sha256:5fc3cd36f0f4a78b03828df94c651efb3e0d287fdcaca8e4c454facec419b918
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for media — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Media, Preview, Thumbnail, LensPreview, CreateMediaParams, UploadMediaParams, CopyMediaParams, ListMediaParams, GetMediaParams, GetMediaByIdsParams, GetMediaPreviewParams, GetMediaThumbnailParams, GetMediaLensPreviewParams } from "../types/media.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — media */
export function createMediaClient(api: SnapchatApiClient) {
  return {
    /** media */
    async createMedia(params: CreateMediaParams): Promise<Media> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/media`, { media: [{ ...rest }] });
      return ensureOne<Media>(unpack<Media>(envelope, "media", "media"), "Media");
    },

    /** media */
    async uploadMedia(params: UploadMediaParams): Promise<Media> {
      const { mediaId, file } = params;
      const envelope = await api.upload<SnapchatEnvelope & { result: Media }>(`/media/${mediaId}/upload`, file, { filename: params.filename });
      return envelope.result;
    },

    /** Example request ​ */
    async copyMedia(params: CopyMediaParams): Promise<Media> {
      const { destinationAdAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${destinationAdAccountId}/media_copy`, { media_copy: [{ ...rest }] });
      return ensureOne<Media>(unpack<Media>(envelope, "media", "media"), "Media");
    },

    /** Example - Fetch all Media in an Ad Account ​ */
    listMedia(params: ListMediaParams): SnapchatCursor<Media> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/media`, link ? undefined : query).then((envelope) => ({
          items: unpack<Media>(envelope, "media", "media"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** media */
    async getMedia(params: GetMediaParams): Promise<Media> {
      const { mediaId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/media/${mediaId}`, query);
      return ensureOne<Media>(unpack<Media>(envelope, "media", "media"), "Media");
    },

    /** Example - Fetch Multiple Media (POST) ​ */
    async getMediaByIds(params: GetMediaByIdsParams): Promise<Media> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/${adAccountId}/get_media_by_ids`, rest);
      return ensureOne<Media>(unpack<Media>(envelope, "media", "media"), "Media");
    },

    /** media */
    getMediaPreview(params: GetMediaPreviewParams): SnapchatCursor<Preview> {
      const { mediaId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/media/${mediaId}/preview`, link ? undefined : query).then((envelope) => ({
          items: unpack<Preview>(envelope, "preview", "preview"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** media */
    getMediaThumbnail(params: GetMediaThumbnailParams): SnapchatCursor<Thumbnail> {
      const { mediaId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/media/${mediaId}/thumbnail`, link ? undefined : query).then((envelope) => ({
          items: unpack<Thumbnail>(envelope, "thumbnail", "thumbnail"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example request ​ */
    getMediaLensPreview(params: GetMediaLensPreviewParams): SnapchatCursor<LensPreview> {
      const { mediaId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/media/${mediaId}/lens_preview`, link ? undefined : query).then((envelope) => ({
          items: unpack<LensPreview>(envelope, "lens_preview", "lens_preview"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
