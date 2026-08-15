// @generated
// fingerprint: sha256:f4f7654e125803ce6a9bff08e691b3d58480c007de5d133cdc69b3c3ec39840e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Reporting — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { ReportIntegratedGetParams, ReportIntegratedGetResponse, ReportTaskCreateParams, ReportTaskCreateResponse, ReportTaskCheckParams, ReportTaskCheckResponse, ReportTaskDownloadParams, ReportTaskDownloadResponse, ReportTaskCancelParams, ReportTaskCancelResponse } from "../types/reporting.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createReporting(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Run a synchronous report */
    async getIntegrated(params: ReportIntegratedGetParams): Promise<ReportIntegratedGetResponse> {
      return get<ReportIntegratedGetResponse>("/open_api/v1.3/report/integrated/get/", params as unknown as Record<string, unknown>);
    },

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
