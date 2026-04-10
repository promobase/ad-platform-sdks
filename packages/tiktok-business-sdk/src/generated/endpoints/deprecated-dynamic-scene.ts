// Auto-generated client for (Deprecated) Dynamic Scene — do not edit
import type { DynamicSceneMaterialSubmitParams, DynamicSceneMaterialSubmitResponse, DynamicSceneTaskCreateParams, DynamicSceneTaskCreateResponse, DynamicSceneTaskGetParams, DynamicSceneTaskGetResponse, DynamicSceneGetParams, DynamicSceneGetResponse, DynamicSceneReportGetParams, DynamicSceneReportGetResponse } from "../types/deprecated-dynamic-scene.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createDeprecatedDynamicScene(opts: { accessToken: string; advertiserId: string }) {
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
    /** (Deprecated) Submit materials */
    async materialSubmit(params: DynamicSceneMaterialSubmitParams): Promise<DynamicSceneMaterialSubmitResponse> {
      return post<DynamicSceneMaterialSubmitResponse>("/open_api/v1.3/dynamic_scene/material/submit/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Create an async task */
    async createTask(params: DynamicSceneTaskCreateParams): Promise<DynamicSceneTaskCreateResponse> {
      return post<DynamicSceneTaskCreateResponse>("/open_api/v1.3/dynamic_scene/task/create/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Get the results of an async task */
    async getTask(params: DynamicSceneTaskGetParams): Promise<DynamicSceneTaskGetResponse> {
      return get<DynamicSceneTaskGetResponse>("/open_api/v1.3/dynamic_scene/task/get/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Get all videos */
    async getDynamicScene(params: DynamicSceneGetParams): Promise<DynamicSceneGetResponse> {
      return get<DynamicSceneGetResponse>("/open_api/v1.3/dynamic_scene/get/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Run a report */
    async getReport(params: DynamicSceneReportGetParams): Promise<DynamicSceneReportGetResponse> {
      return get<DynamicSceneReportGetResponse>("/open_api/v1.3/dynamic_scene/report/get/", params as unknown as Record<string, unknown>);
    },
  };
}
