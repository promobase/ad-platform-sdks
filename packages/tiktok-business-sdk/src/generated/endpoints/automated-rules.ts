// Auto-generated client for Automated Rules — do not edit
import type { OptimizerRuleCreateParams, OptimizerRuleCreateResponse, OptimizerRuleGetParams, OptimizerRuleGetResponse, OptimizerRuleListParams, OptimizerRuleListResponse, OptimizerRuleResultListParams, OptimizerRuleResultListResponse, OptimizerRuleResultGetParams, OptimizerRuleResultGetResponse, OptimizerRuleUpdateParams, OptimizerRuleUpdateResponse, OptimizerRuleUpdateStatusParams, OptimizerRuleUpdateStatusResponse, OptimizerRuleBatchBindParams, OptimizerRuleBatchBindResponse } from "../types/automated-rules.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAutomatedRules(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create rules */
    async createRule(params: OptimizerRuleCreateParams): Promise<OptimizerRuleCreateResponse> {
      return post<OptimizerRuleCreateResponse>("/open_api/v1.3/optimizer/rule/create/", params as unknown as Record<string, unknown>);
    },

    /** Get rules by ID */
    async getRule(params: OptimizerRuleGetParams): Promise<OptimizerRuleGetResponse> {
      return get<OptimizerRuleGetResponse>("/open_api/v1.3/optimizer/rule/get/", params as unknown as Record<string, unknown>);
    },

    /** Get rules by filters */
    async listRule(params: OptimizerRuleListParams): Promise<OptimizerRuleListResponse> {
      return get<OptimizerRuleListResponse>("/open_api/v1.3/optimizer/rule/list/", params as unknown as Record<string, unknown>);
    },

    /** Get rule results */
    async listResult(params: OptimizerRuleResultListParams): Promise<OptimizerRuleResultListResponse> {
      return get<OptimizerRuleResultListResponse>("/open_api/v1.3/optimizer/rule/result/list/", params as unknown as Record<string, unknown>);
    },

    /** Get result details */
    async getResult(params: OptimizerRuleResultGetParams): Promise<OptimizerRuleResultGetResponse> {
      return get<OptimizerRuleResultGetResponse>("/open_api/v1.3/optimizer/rule/result/get/", params as unknown as Record<string, unknown>);
    },

    /** Update rules */
    async updateRule(params: OptimizerRuleUpdateParams): Promise<OptimizerRuleUpdateResponse> {
      return post<OptimizerRuleUpdateResponse>("/open_api/v1.3/optimizer/rule/update/", params as unknown as Record<string, unknown>);
    },

    /** Update the statuses of rules */
    async updateStatus(params: OptimizerRuleUpdateStatusParams): Promise<OptimizerRuleUpdateStatusResponse> {
      return post<OptimizerRuleUpdateStatusResponse>("/open_api/v1.3/optimizer/rule/update/status/", params as unknown as Record<string, unknown>);
    },

    /** Bind/Unbind rules */
    async ruleBatchBind(params: OptimizerRuleBatchBindParams): Promise<OptimizerRuleBatchBindResponse> {
      return post<OptimizerRuleBatchBindResponse>("/open_api/v1.3/optimizer/rule/batch_bind/", params as unknown as Record<string, unknown>);
    },
  };
}
