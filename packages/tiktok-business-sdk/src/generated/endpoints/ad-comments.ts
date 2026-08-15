// @generated
// fingerprint: sha256:d6b2e348793afdd23fdfe4960b0596da713adab8c152f2383b28e2c933509bde
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Comments — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CommentListParams, CommentListResponse, CommentReferenceParams, CommentReferenceResponse, CommentStatusUpdateParams, CommentStatusUpdateResponse, CommentPostParams, CommentPostResponse, CommentDeleteParams, CommentDeleteResponse, CommentTaskCreateParams, CommentTaskCreateResponse, CommentTaskCheckParams, CommentTaskCheckResponse, CommentTaskDownloadParams, CommentTaskDownloadResponse } from "../types/ad-comments.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdComments(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
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
