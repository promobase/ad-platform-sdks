// @generated
// fingerprint: sha256:4f3cb77d4e0b63219e2338f2cfc242f1c3a89c4f34e4ea3b6bb25a655b3c9281
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Automated Rules — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { OptimizerRuleCreateParams, OptimizerRuleCreateResponse, OptimizerRuleGetParams, OptimizerRuleGetResponse, OptimizerRuleListParams, OptimizerRuleListResponse, OptimizerRuleResultListParams, OptimizerRuleResultListResponse, OptimizerRuleResultGetParams, OptimizerRuleResultGetResponse, OptimizerRuleUpdateParams, OptimizerRuleUpdateResponse, OptimizerRuleUpdateStatusParams, OptimizerRuleUpdateStatusResponse, OptimizerRuleBatchBindParams, OptimizerRuleBatchBindResponse } from "../types/automated-rules.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAutomatedRules(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
