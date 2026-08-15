// @generated
// fingerprint: sha256:6a93adb7d3610997fd9b4ec5aeb4f99f458ad371ba37a094ccdd5158e96f2efb
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Creative Reports — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { ReportAdBenchmarkGetParams, ReportAdBenchmarkGetResponse, ReportVideoPerformanceGetParams, ReportVideoPerformanceGetResponse } from "../types/creative-reports.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCreativeReports(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get ad benchmarks */
    async getAdBenchmark(params: ReportAdBenchmarkGetParams): Promise<ReportAdBenchmarkGetResponse> {
      return get<ReportAdBenchmarkGetResponse>("/open_api/v1.3/report/ad_benchmark/get/", params as unknown as Record<string, unknown>);
    },

    /** Get in-second performance */
    async getVideoPerformance(params: ReportVideoPerformanceGetParams): Promise<ReportVideoPerformanceGetResponse> {
      return get<ReportVideoPerformanceGetResponse>("/open_api/v1.3/report/video_performance/get/", params as unknown as Record<string, unknown>);
    },
  };
}
