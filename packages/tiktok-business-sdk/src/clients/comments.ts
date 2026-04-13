import type {
  CommentItem,
  CreateCommentOptions,
  ListCommentsOptions,
  ListCommentsResponse,
  ListRepliesOptions,
  ReplyCommentOptions,
  TikTokClientOptions,
  TikTokResponse,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

export function createComments(opts: TikTokClientOptions) {
  const { accessToken, businessId } = opts;

  async function request<T>(
    method: string,
    path: string,
    body?: Record<string, unknown>,
    query?: Record<string, unknown>,
  ): Promise<T> {
    let url = `${TT_API_BASE}${path}`;
    if (query) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
          params.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
        }
      }
      url += `?${params.toString()}`;
    }

    const init: RequestInit = {
      method,
      headers: {
        "Access-Token": accessToken,
        "Content-Type": "application/json",
      },
    };
    if (body && (method === "POST" || method === "PUT")) {
      init.body = JSON.stringify(body);
    }

    const response = await fetch(url, init);
    const responseBody = (await response.json()) as TikTokResponse<T>;

    if (!response.ok || responseBody.code !== 0) {
      throw new Error(
        `TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`,
      );
    }

    return responseBody.data;
  }

  return {
    /** List comments on a video. Cursor-based pagination, max 30 per page. */
    async list(opts: ListCommentsOptions): Promise<ListCommentsResponse> {
      const query: Record<string, unknown> = {
        business_id: businessId,
        video_id: opts.videoId,
      };
      if (opts.commentIds) query.comment_ids = JSON.stringify(opts.commentIds);
      if (opts.includeReplies !== undefined) query.include_replies = opts.includeReplies;
      if (opts.status) query.status = opts.status;
      if (opts.sortField) query.sort_field = opts.sortField;
      if (opts.sortOrder) query.sort_order = opts.sortOrder;
      if (opts.cursor !== undefined) query.cursor = opts.cursor;
      if (opts.maxCount !== undefined) query.max_count = opts.maxCount;

      return request<ListCommentsResponse>("GET", "/business/comment/list/", undefined, query);
    },

    /** Create a comment on a video. Either text or imageUri is required. Max 150 UTF-8 chars for text. */
    async create(opts: CreateCommentOptions): Promise<CommentItem> {
      const body: Record<string, unknown> = {
        business_id: businessId,
        video_id: opts.videoId,
      };
      if (opts.text) body.text = opts.text;
      if (opts.imageUri) body.image_uri = opts.imageUri;
      if (opts.imageWidth !== undefined) body.image_width = opts.imageWidth;
      if (opts.imageHeight !== undefined) body.image_height = opts.imageHeight;

      return request<CommentItem>("POST", "/business/comment/create/", body);
    },

    /** Reply to a comment. Either text or imageUri is required. */
    async reply(opts: ReplyCommentOptions): Promise<CommentItem> {
      const body: Record<string, unknown> = {
        business_id: businessId,
        video_id: opts.videoId,
        comment_id: opts.commentId,
      };
      if (opts.text) body.text = opts.text;
      if (opts.imageUri) body.image_uri = opts.imageUri;
      if (opts.imageWidth !== undefined) body.image_width = opts.imageWidth;
      if (opts.imageHeight !== undefined) body.image_height = opts.imageHeight;
      if (opts.replyImageUrl) body.reply_image_url = opts.replyImageUrl;

      return request<CommentItem>("POST", "/business/comment/reply/", body);
    },

    /** List all replies to a specific comment. Cursor-based pagination, max 30 per page. */
    async listReplies(opts: ListRepliesOptions): Promise<ListCommentsResponse> {
      const query: Record<string, unknown> = {
        business_id: businessId,
        video_id: opts.videoId,
        comment_id: opts.commentId,
      };
      if (opts.status) query.status = opts.status;
      if (opts.sortField) query.sort_field = opts.sortField;
      if (opts.sortOrder) query.sort_order = opts.sortOrder;
      if (opts.cursor !== undefined) query.cursor = opts.cursor;
      if (opts.maxCount !== undefined) query.max_count = opts.maxCount;

      return request<ListCommentsResponse>(
        "GET",
        "/business/comment/reply/list/",
        undefined,
        query,
      );
    },

    /** Like or unlike a comment. */
    async like(commentId: string, action: "LIKE" | "UNLIKE"): Promise<void> {
      await request<Record<string, never>>("POST", "/business/comment/like/", {
        business_id: businessId,
        comment_id: commentId,
        action,
      });
    },

    /** Hide or unhide a comment. */
    async hide(opts: {
      videoId: string;
      commentId: string;
      action: "HIDE" | "UNHIDE";
    }): Promise<void> {
      await request<Record<string, never>>("POST", "/business/comment/hide/", {
        business_id: businessId,
        video_id: opts.videoId,
        comment_id: opts.commentId,
        action: opts.action,
      });
    },

    /** Delete a comment. Only comments owned by the account can be deleted. */
    async delete(commentId: string): Promise<void> {
      await request<Record<string, never>>("POST", "/business/comment/delete/", {
        business_id: businessId,
        comment_id: commentId,
      });
    },

    /**
     * Upload an image for use in comments/replies.
     * Returns an image_uri to pass to create() or reply() as imageUri.
     * Max 5MB, 360x360–1920x1080, JPG/JPEG/WebP/PNG.
     */
    async uploadImage(
      imageFile: Blob,
    ): Promise<{ imageUri: string; width: number; height: number }> {
      const formData = new FormData();
      formData.append("business_id", businessId);
      formData.append("image_file", imageFile);

      const url = `${TT_API_BASE}/business/comment/image/upload/`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Access-Token": accessToken },
        body: formData,
      });
      const responseBody = (await response.json()) as TikTokResponse<{
        image_uri: string;
        width: number;
        height: number;
      }>;
      if (!response.ok || responseBody.code !== 0) {
        throw new Error(
          `TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`,
        );
      }
      return {
        imageUri: responseBody.data.image_uri,
        width: responseBody.data.width,
        height: responseBody.data.height,
      };
    },
  };
}
