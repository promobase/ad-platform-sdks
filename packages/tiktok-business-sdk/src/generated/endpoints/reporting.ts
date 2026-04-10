// Auto-generated client for Reporting — do not edit
import type { ReportTaskCreateParams, ReportTaskCreateResponse, ReportTaskCheckParams, ReportTaskCheckResponse, ReportTaskDownloadParams, ReportTaskDownloadResponse, ReportTaskCancelParams, ReportTaskCancelResponse } from "../types/reporting.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createReporting(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create an asynchronous report task */
    async createTask(params: ReportTaskCreateParams): Promise<ReportTaskCreateResponse> {
      return post<ReportTaskCreateResponse>("/open_api/v1.3/report/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Get the status of an async report task */
    async taskCheck(params: ReportTaskCheckParams): Promise<ReportTaskCheckResponse> {
      return get<ReportTaskCheckResponse>("/open_api/v1.3/report/task/check/", params as unknown as Record<string, unknown>);
    },

    /** Download the output of an async report task */
    async taskDownload(params: ReportTaskDownloadParams): Promise<ReportTaskDownloadResponse> {
      return get<ReportTaskDownloadResponse>("/open_api/v1.3/report/task/download/", params as unknown as Record<string, unknown>);
    },

    /** Cancel an asynchronous report task */
    async taskCancel(params: ReportTaskCancelParams): Promise<ReportTaskCancelResponse> {
      return post<ReportTaskCancelResponse>("/open_api/v1.3/report/task/cancel/", params as unknown as Record<string, unknown>);
    },
  };
}
