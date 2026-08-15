// @generated
// fingerprint: sha256:3683c317ba4171241fcaf8e54e6ba5fdb4384a1b9ebb27ddd3f3448cb4b2638b
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for (Deprecated) Dynamic Scene — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { DynamicSceneMaterialSubmitParams, DynamicSceneMaterialSubmitResponse, DynamicSceneTaskCreateParams, DynamicSceneTaskCreateResponse, DynamicSceneTaskGetParams, DynamicSceneTaskGetResponse, DynamicSceneGetParams, DynamicSceneGetResponse, DynamicSceneReportGetParams, DynamicSceneReportGetResponse } from "../types/deprecated-dynamic-scene.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createDeprecatedDynamicScene(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
