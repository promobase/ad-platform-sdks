// Auto-generated client for Ad Comments — do not edit
import type { CommentListParams, CommentListResponse, CommentReferenceParams, CommentReferenceResponse, CommentStatusUpdateParams, CommentStatusUpdateResponse, CommentPostParams, CommentPostResponse, CommentDeleteParams, CommentDeleteResponse, CommentTaskCreateParams, CommentTaskCreateResponse, CommentTaskCheckParams, CommentTaskCheckResponse, CommentTaskDownloadParams, CommentTaskDownloadResponse } from "../types/ad-comments.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdComments(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    /** Get comments */
    async listComment(params: CommentListParams): Promise<CommentListResponse> {
      return get<CommentListResponse>("/open_api/v1.3/comment/list/", params as unknown as Record<string, unknown>);
    },

    /** Get related comments */
    async commentReference(params: CommentReferenceParams): Promise<CommentReferenceResponse> {
      return get<CommentReferenceResponse>("/open_api/v1.3/comment/reference/", params as unknown as Record<string, unknown>);
    },

    /** Update the statuses of comments */
    async updateStatus(params: CommentStatusUpdateParams): Promise<CommentStatusUpdateResponse> {
      return post<CommentStatusUpdateResponse>("/open_api/v1.3/comment/status/update/", params as unknown as Record<string, unknown>);
    },

    /** Reply to a comment */
    async commentPost(params: CommentPostParams): Promise<CommentPostResponse> {
      return post<CommentPostResponse>("/open_api/v1.3/comment/post/", params as unknown as Record<string, unknown>);
    },

    /** Delete a comment */
    async deleteComment(params: CommentDeleteParams): Promise<CommentDeleteResponse> {
      return post<CommentDeleteResponse>("/open_api/v1.3/comment/delete/", params as unknown as Record<string, unknown>);
    },

    /** Create a comment export task */
    async createTask(params: CommentTaskCreateParams): Promise<CommentTaskCreateResponse> {
      return post<CommentTaskCreateResponse>("/open_api/v1.3/comment/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Get the status of a comment export task */
    async taskCheck(params: CommentTaskCheckParams): Promise<CommentTaskCheckResponse> {
      return get<CommentTaskCheckResponse>("/open_api/v1.3/comment/task/check/", params as unknown as Record<string, unknown>);
    },

    /** Download exported comments */
    async taskDownload(params: CommentTaskDownloadParams): Promise<CommentTaskDownloadResponse> {
      return get<CommentTaskDownloadResponse>("/open_api/v1.3/comment/task/download/", params as unknown as Record<string, unknown>);
    },
  };
}
