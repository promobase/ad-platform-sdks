import { authHeaders, parseYouTubeResponse, type YouTubeClient } from "./client.ts";
import { YouTubeUploadError } from "./errors.ts";
import { YOUTUBE_MEDIA_UPLOADS } from "./generated/discovery.ts";
import type { Video, YouTubeVideosInsertParams } from "./generated/types.ts";

export type YouTubeUploadBody = Blob | ArrayBuffer | Uint8Array | ReadableStream<Uint8Array>;

export interface YouTubeResumableUploadOptions {
  params: YouTubeVideosInsertParams;
  metadata: Video;
  media: YouTubeUploadBody;
  mediaType: string;
  contentLength?: number;
  signal?: AbortSignal;
}

export interface YouTubeUploadSession {
  uploadUrl: string;
}

export type YouTubeMediaUploadOperation = (typeof YOUTUBE_MEDIA_UPLOADS)[number]["operationId"];

export interface YouTubeGenericResumableUploadOptions {
  params?: object;
  metadata?: unknown;
  media: YouTubeUploadBody;
  mediaType: string;
  contentLength?: number;
  signal?: AbortSignal;
}

export function createUploads(client: YouTubeClient) {
  return {
    async startResumableUpload(
      operationId: YouTubeMediaUploadOperation,
      opts: Omit<YouTubeGenericResumableUploadOptions, "media">,
    ): Promise<YouTubeUploadSession> {
      const upload = resolveUpload(operationId);
      const resumable = upload.protocols.resumable;
      assertAcceptedMediaType(operationId, upload.accept, opts.mediaType);
      if (opts.contentLength !== undefined && upload.maxSize) {
        assertMaxSize(operationId, opts.contentLength, Number(upload.maxSize));
      }
      const url = client.buildUrl(client.uploadBaseUrl, resumable.path, {
        ...opts.params,
        uploadType: "resumable",
      });
      const headers: Record<string, string> = {
        ...authHeaders(client.accessToken),
        "Content-Type": "application/json; charset=UTF-8",
        "X-Upload-Content-Type": opts.mediaType,
      };
      if (opts.contentLength !== undefined) {
        headers["X-Upload-Content-Length"] = String(opts.contentLength);
      }
      const response = await client.fetchImpl(url, {
        method: "POST",
        headers,
        body: JSON.stringify(opts.metadata ?? {}),
        signal: opts.signal,
      });
      if (!response.ok) {
        const text = await response.text();
        throw new YouTubeUploadError(
          `YouTube resumable upload session failed with ${response.status}`,
          response.status,
          text,
        );
      }
      const uploadUrl = response.headers.get("location");
      if (!uploadUrl) {
        throw new Error("YouTube resumable upload session did not return a Location header");
      }
      return { uploadUrl };
    },

    async uploadResumable<T = unknown>(
      operationId: YouTubeMediaUploadOperation,
      opts: YouTubeGenericResumableUploadOptions,
    ): Promise<T> {
      const contentLength = opts.contentLength ?? resolveBodySize(opts.media);
      if (contentLength === undefined) {
        throw new Error("YouTube resumable upload requires contentLength for stream bodies");
      }
      const session = await this.startResumableUpload(operationId, {
        params: opts.params,
        metadata: opts.metadata,
        mediaType: opts.mediaType,
        contentLength,
        signal: opts.signal,
      });
      return this.uploadToSession<T>(session.uploadUrl, opts.media, {
        mediaType: opts.mediaType,
        contentLength,
        signal: opts.signal,
      });
    },

    async startVideoResumableUpload(
      opts: Omit<YouTubeResumableUploadOptions, "media">,
    ): Promise<YouTubeUploadSession> {
      return this.startResumableUpload("youtube.videos.insert", opts);
    },

    async uploadVideoResumable(opts: YouTubeResumableUploadOptions): Promise<Video> {
      const contentLength = opts.contentLength ?? resolveBodySize(opts.media);
      if (contentLength === undefined) {
        throw new Error("YouTube resumable upload requires contentLength for stream bodies");
      }

      const session = await this.startVideoResumableUpload({
        params: opts.params,
        metadata: opts.metadata,
        mediaType: opts.mediaType,
        contentLength,
        signal: opts.signal,
      });

      return this.uploadToSession(session.uploadUrl, opts.media, {
        mediaType: opts.mediaType,
        contentLength,
        signal: opts.signal,
      });
    },

    async uploadToSession<T = Video>(
      uploadUrl: string,
      media: YouTubeUploadBody,
      opts: { mediaType: string; contentLength: number; signal?: AbortSignal },
    ): Promise<T> {
      const response = await client.fetchImpl(uploadUrl, {
        method: "PUT",
        headers: {
          ...authHeaders(client.accessToken),
          "Content-Length": String(opts.contentLength),
          "Content-Type": opts.mediaType,
        },
        body: toRequestBody(media),
        signal: opts.signal,
      });

      if (response.status === 308) {
        const range = response.headers.get("range");
        throw new YouTubeUploadError(
          range ? `YouTube upload incomplete; resume after ${range}` : "YouTube upload incomplete",
          response.status,
          "",
        );
      }

      return parseYouTubeResponse<T>(response);
    },

    async checkResumableUpload(uploadUrl: string, contentLength: number): Promise<Response> {
      return client.fetchImpl(uploadUrl, {
        method: "PUT",
        headers: {
          ...authHeaders(client.accessToken),
          "Content-Length": "0",
          "Content-Range": `bytes */${contentLength}`,
        },
      });
    },
  };
}

function resolveUpload(operationId: YouTubeMediaUploadOperation) {
  const upload = YOUTUBE_MEDIA_UPLOADS.find((candidate) => candidate.operationId === operationId);
  if (!upload) throw new Error(`Unknown YouTube media upload operation: ${operationId}`);
  return upload;
}

function assertAcceptedMediaType(
  operationId: string,
  accepted: readonly string[],
  mediaType: string,
) {
  if (
    accepted.length > 0 &&
    !accepted.includes("*/*") &&
    !accepted.includes(mediaType) &&
    !accepted.some(
      (candidate) => candidate.endsWith("/*") && mediaType.startsWith(candidate.slice(0, -1)),
    )
  ) {
    throw new Error(`${operationId} does not accept media type ${mediaType}`);
  }
}

function assertMaxSize(operationId: string, contentLength: number, maxSize: number) {
  if (Number.isFinite(maxSize) && contentLength > maxSize) {
    throw new Error(`${operationId} media exceeds the ${maxSize}-byte provider limit`);
  }
}

function resolveBodySize(body: YouTubeUploadBody): number | undefined {
  if (body instanceof ArrayBuffer) return body.byteLength;
  if (body instanceof Uint8Array) return body.byteLength;
  if (typeof Blob !== "undefined" && body instanceof Blob) return body.size;
  return undefined;
}

function toRequestBody(body: YouTubeUploadBody): RequestInit["body"] {
  return body as RequestInit["body"];
}
