export interface TikTokDeveloperClientOptions {
  accessToken: string;
  baseUrl?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface TikTokDeveloperOAuthConfig {
  clientKey: string;
  clientSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface TikTokDeveloperTokenResponse {
  access_token: string;
  expires_in: number;
  open_id: string;
  refresh_expires_in?: number;
  refresh_token: string;
  scope?: string;
  token_type?: string;
}

export type TikTokDeveloperPrivacyLevel =
  | "PUBLIC_TO_EVERYONE"
  | "MUTUAL_FOLLOW_FRIENDS"
  | "FOLLOWER_OF_CREATOR"
  | "SELF_ONLY";

export interface TikTokDeveloperVideo {
  id: string;
  title?: string;
  video_description?: string;
  create_time?: number;
  duration?: number;
  cover_image_url?: string;
  share_url?: string;
  embed_link?: string;
  view_count?: number;
  like_count?: number;
  comment_count?: number;
  share_count?: number;
}

export interface TikTokDeveloperPublishStatus {
  status: string;
  fail_reason?: string;
  publicaly_available_post_id?: string[];
  uploaded_bytes?: number;
  downloaded_bytes?: number;
}

export class TikTokDeveloperApiError extends Error {
  constructor(
    message: string,
    readonly code?: string | number,
    readonly logId?: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "TikTokDeveloperApiError";
  }
}

export function createTikTokDeveloperOAuth(config: TikTokDeveloperOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;

  async function tokenRequest(body: URLSearchParams): Promise<TikTokDeveloperTokenResponse> {
    const response = await fetchImpl("https://open.tiktokapis.com/v2/oauth/token/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: config.signal,
    });
    const data = (await response.json()) as TikTokDeveloperTokenResponse & {
      error?: string;
      error_description?: string;
      log_id?: string;
    };
    if (!response.ok || data.error) {
      throw new TikTokDeveloperApiError(
        data.error_description ?? data.error ?? "TikTok OAuth token request failed",
        data.error,
        data.log_id,
        response.status,
      );
    }
    return data;
  }

  return {
    getAuthorizationUrl(opts: { state: string; codeChallenge: string; scopes?: string[] }): string {
      const params = new URLSearchParams({
        client_key: config.clientKey,
        redirect_uri: config.redirectUri,
        response_type: "code",
        scope: (
          opts.scopes ?? [
            "user.info.basic",
            "user.info.profile",
            "user.info.stats",
            "video.list",
            "video.publish",
            "video.upload",
          ]
        ).join(","),
        state: opts.state,
        code_challenge: opts.codeChallenge,
        code_challenge_method: "S256",
      });
      return `https://www.tiktok.com/v2/auth/authorize/?${params}`;
    },

    exchangeCode(code: string, codeVerifier: string): Promise<TikTokDeveloperTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          client_key: config.clientKey,
          client_secret: config.clientSecret,
          code,
          grant_type: "authorization_code",
          redirect_uri: config.redirectUri,
          code_verifier: codeVerifier,
        }),
      );
    },

    refreshToken(refreshToken: string): Promise<TikTokDeveloperTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          client_key: config.clientKey,
          client_secret: config.clientSecret,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      );
    },

    async revokeToken(accessToken: string): Promise<void> {
      const response = await fetchImpl("https://open.tiktokapis.com/v2/oauth/revoke/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ client_key: config.clientKey, token: accessToken }),
        signal: config.signal,
      });
      if (!response.ok) throw new Error(`TikTok OAuth revoke failed: ${await response.text()}`);
    },
  };
}

export function createTikTokDeveloperClient(opts: TikTokDeveloperClientOptions) {
  const fetchImpl = opts.fetch ?? fetch;
  const baseUrl = (opts.baseUrl ?? "https://open.tiktokapis.com").replace(/\/$/, "");

  async function request<T>(path: string, body: unknown, fields?: readonly string[]): Promise<T> {
    const url = new URL(path, `${baseUrl}/`);
    if (fields?.length) url.searchParams.set("fields", fields.join(","));
    const response = await fetchImpl(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${opts.accessToken}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body ?? {}),
      signal: opts.signal,
    });
    const envelope = (await response.json()) as {
      data?: T;
      error?: { code?: string | number; message?: string; log_id?: string };
    };
    const code = envelope.error?.code;
    if (!response.ok || (code !== undefined && code !== "ok" && code !== 0)) {
      throw new TikTokDeveloperApiError(
        envelope.error?.message ?? response.statusText,
        code,
        envelope.error?.log_id,
        response.status,
      );
    }
    if (envelope.data === undefined) throw new Error(`TikTok ${path} returned no data`);
    return envelope.data;
  }

  const defaultVideoFields = [
    "id",
    "title",
    "video_description",
    "create_time",
    "duration",
    "cover_image_url",
    "share_url",
    "embed_link",
    "view_count",
    "like_count",
    "comment_count",
    "share_count",
  ] as const;

  return {
    creator: {
      queryInfo() {
        return request<Record<string, unknown>>("/v2/post/publish/creator_info/query/", {});
      },
    },

    videos: {
      list(opts?: { fields?: string[]; cursor?: number; maxCount?: number }) {
        return request<{ videos: TikTokDeveloperVideo[]; cursor: number; has_more: boolean }>(
          "/v2/video/list/",
          { cursor: opts?.cursor, max_count: opts?.maxCount ?? 20 },
          opts?.fields ?? defaultVideoFields,
        );
      },

      query(videoIds: string[], fields: string[] = [...defaultVideoFields]) {
        return request<{ videos: TikTokDeveloperVideo[] }>(
          "/v2/video/query/",
          { filters: { video_ids: videoIds } },
          fields,
        );
      },

      initDirectPost(input: {
        videoUrl: string;
        title?: string;
        privacyLevel: TikTokDeveloperPrivacyLevel;
        disableComment?: boolean;
        disableDuet?: boolean;
        disableStitch?: boolean;
        coverTimestampMs?: number;
        brandedContent?: boolean;
        brandOrganic?: boolean;
        isAiGenerated?: boolean;
      }) {
        return request<{ publish_id: string }>("/v2/post/publish/video/init/", {
          post_info: {
            title: input.title,
            privacy_level: input.privacyLevel,
            disable_comment: input.disableComment,
            disable_duet: input.disableDuet,
            disable_stitch: input.disableStitch,
            video_cover_timestamp_ms: input.coverTimestampMs,
            brand_content_toggle: input.brandedContent ?? false,
            brand_organic_toggle: input.brandOrganic,
            is_aigc: input.isAiGenerated,
          },
          source_info: { source: "PULL_FROM_URL", video_url: input.videoUrl },
        });
      },

      initFileUpload(input: {
        videoSize: number;
        chunkSize: number;
        totalChunkCount: number;
        title?: string;
        privacyLevel: TikTokDeveloperPrivacyLevel;
        brandedContent?: boolean;
      }) {
        return request<{ publish_id: string; upload_url: string }>("/v2/post/publish/video/init/", {
          post_info: {
            title: input.title,
            privacy_level: input.privacyLevel,
            brand_content_toggle: input.brandedContent ?? false,
          },
          source_info: {
            source: "FILE_UPLOAD",
            video_size: input.videoSize,
            chunk_size: input.chunkSize,
            total_chunk_count: input.totalChunkCount,
          },
        });
      },
    },

    photos: {
      initDirectPost(input: {
        photoUrls: string[];
        title: string;
        description: string;
        privacyLevel: TikTokDeveloperPrivacyLevel;
        disableComment?: boolean;
        autoAddMusic?: boolean;
        photoCoverIndex?: number;
      }) {
        return request<{ publish_id: string }>("/v2/post/publish/content/init/", {
          post_mode: "DIRECT_POST",
          media_type: "PHOTO",
          post_info: {
            title: input.title,
            description: input.description,
            privacy_level: input.privacyLevel,
            disable_comment: input.disableComment,
            auto_add_music: input.autoAddMusic,
          },
          source_info: {
            source: "PULL_FROM_URL",
            photo_images: input.photoUrls,
            photo_cover_index: input.photoCoverIndex,
          },
        });
      },
    },

    publish: {
      getStatus(publishId: string) {
        return request<TikTokDeveloperPublishStatus>("/v2/post/publish/status/fetch/", {
          publish_id: publishId,
        });
      },

      async uploadChunk(
        uploadUrl: string,
        chunk: Blob | ArrayBuffer | Uint8Array,
        range: { start: number; endInclusive: number; total: number },
        signal?: AbortSignal,
      ): Promise<Response> {
        const response = await fetchImpl(uploadUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "video/mp4",
            "Content-Length": String(range.endInclusive - range.start + 1),
            "Content-Range": `bytes ${range.start}-${range.endInclusive}/${range.total}`,
          },
          body: chunk as RequestInit["body"],
          signal: signal ?? opts.signal,
        });
        if (!response.ok) {
          throw new TikTokDeveloperApiError(
            `TikTok upload failed: ${await response.text()}`,
            undefined,
            undefined,
            response.status,
          );
        }
        return response;
      },
    },
  };
}

export async function createTikTokDeveloperPkcePair(): Promise<{
  verifier: string;
  challenge: string;
}> {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const verifier = base64Url(bytes);
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  return { verifier, challenge: base64Url(new Uint8Array(digest)) };
}

function base64Url(bytes: Uint8Array): string {
  let value = "";
  for (const byte of bytes) value += String.fromCharCode(byte);
  return btoa(value).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
