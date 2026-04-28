import { authHeaders, parseYouTubeResponse, type YouTubeClient } from "./client.ts";
import { YouTubeUploadError } from "./errors.ts";
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

export function createUploads(client: YouTubeClient) {
  return {
    async startVideoResumableUpload(
      opts: Omit<YouTubeResumableUploadOptions, "media">,
    ): Promise<YouTubeUploadSession> {
      const contentLength = opts.contentLength;
      const url = client.buildUrl(client.uploadBaseUrl, "upload/youtube/v3/videos", {
        ...opts.params,
        uploadType: "resumable",
      });

      const headers: Record<string, string> = {
        ...authHeaders(client.accessToken),
        "Content-Type": "application/json; charset=UTF-8",
        "X-Upload-Content-Type": opts.mediaType,
      };
      if (contentLength !== undefined) {
        headers["X-Upload-Content-Length"] = String(contentLength);
      }

      const response = await client.fetchImpl(url, {
        method: "POST",
        headers,
        body: JSON.stringify(opts.metadata),
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

    async uploadToSession(
      uploadUrl: string,
      media: YouTubeUploadBody,
      opts: { mediaType: string; contentLength: number; signal?: AbortSignal },
    ): Promise<Video> {
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

      return parseYouTubeResponse<Video>(response);
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

function resolveBodySize(body: YouTubeUploadBody): number | undefined {
  if (body instanceof ArrayBuffer) return body.byteLength;
  if (body instanceof Uint8Array) return body.byteLength;
  if (typeof Blob !== "undefined" && body instanceof Blob) return body.size;
  return undefined;
}

function toRequestBody(body: YouTubeUploadBody): RequestInit["body"] {
  return body as RequestInit["body"];
}
